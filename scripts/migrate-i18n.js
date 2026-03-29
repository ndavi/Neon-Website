import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('src/content/projects/**/*.json');

files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  if (typeof content.title === 'string') {
    content.title = { fr: content.title, en: content.title };
  }
  if (typeof content.description === 'string') {
    content.description = { fr: content.description, en: content.description };
  }
  if (typeof content.alt === 'string') {
    content.alt = { fr: content.alt, en: content.alt };
  }
  
  fs.writeFileSync(file, JSON.stringify(content, null, 2));
});
console.log(`Migrated ${files.length} files.`);
