const fs = require("fs");
const photoList = JSON.parse(fs.readFileSync("NeonWebSite/src/assets/photoList.json", "utf8"));
const photosDescriptions = JSON.parse(fs.readFileSync("NeonWebSite/src/assets/photosDescriptions.json", "utf8"));

const categoryMapping = {
  stageDesign: "STAGE DESIGN",
  tour: "ON TOUR",
  artsNumeriques: "ARTS NUMERIQUES",
  conception3d: "CONCEPTION 3D"
};

let count = 0;
for (const key in photoList) {
  const projects = photoList[key];
  const category = categoryMapping[key];
  projects.forEach((p, index) => {
    const descObj = photosDescriptions[p.tag] || { title: p.tag, text: "", lien: "" };
    const slug = `${key}-${index}`;
    const title = (descObj.title || p.tag || "Untitled").replace(/"/g, '\\"');
    const text = (descObj.text || "").replace(/"/g, '\\"').replace(/\n/g, " ");
    const imgSrc = p.src.replace("./img/", "/img/");
    const imgSrcSmall = p.srcSmall.replace("./img/", "/img/");
    const tags = p.alt.split(" ").filter(t => t).map(t => `"${t}"`).join(", ");
    const credit = (p.credit || "NEON").replace(/"/g, '\\"');
    const lienCredit = (p.lienCredit || "").replace(/"/g, '\\"');
    const alt = (p.alt || "").replace(/"/g, '\\"');
    const tag = (p.tag || "").replace(/"/g, '\\"');

    const content = `---
title: "${title}"
description: "${text}"
coverImage: "${imgSrc}"
srcSmall: "${imgSrcSmall}"
tags: [${tags}]
date: "2024-01-01"
category: "${category}"
credit: "${credit}"
lienCredit: "${lienCredit}"
alt: "${alt}"
tag: "${tag}"
---
`;
    fs.writeFileSync(`src/content/projects/${slug}.md`, content);
    count++;
  });
}
console.log(`Generated ${count} projects with full data.`);
