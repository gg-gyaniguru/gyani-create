#!/usr/bin/env node

import { cancel, intro, isCancel, confirm, log, outro, select, text } from '@clack/prompts';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import path from 'path';
import color from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('');
intro('create bun app using gyani-create');

const projectName = await text({ message: 'enter project name:' });
if (isCancel(projectName)) {
    cancel('project creation cancel');
    process.exit(0);
}

const projectType = await select({
    message: 'select project type:',
    options: [
        { value: 'javascript', label: 'javascript' },
        { value: 'typescript', label: 'typescript' }
    ]
});
if (isCancel(projectType)) {
    cancel('project creation cancel');
    process.exit(0);
}

const target = projectName ? path.join(process.cwd(), projectName) : process.cwd();
const template = path.join(__dirname, '..', 'templates', projectType);

if (projectName && fs.existsSync(target)) {
    const overwrite = await confirm({
        message: `project ${color.yellow(projectName)} already exists, do you want to overwrite?`,
    });
    if (overwrite) {
        await fs.remove(target);
    } else {
        cancel('project creation cancel');
        process.exit(0);
    }
}

await fs.copy(template, target);

log.message('cd client / cd server');
log.message('bun install');
log.message('bun update --latest');
log.message('bun run dev');
log.message(`thanks for choosing ${color.cyan('gyani-create')}`);
outro('enjoy coding...');