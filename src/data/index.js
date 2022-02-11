import { html as newBranch } from './new-branch.md';
import { html as checkout } from './checkout.md';
import { html as bisect } from './bisect.md';
import { html as changeCommitMessage } from './change-commit-message.md';

export default [
    {
        id: 'create-branch',
        title: 'New branch',
        description: 'Create a new branch',
        tags: ['create', 'new', 'branch', 'checkout -b'],
        markdown: newBranch,
    },
    {
        id: 'rename-branch',
        title: 'Rename branch',
        description: 'This is an example',
        tags: ['change', 'rename', 'branch', 'name'],
        markdown: checkout,
    },
    {
        id: 'bisect',
        title: 'Bisect',
        description: 'Find a broken commit',
        tags: ['bisect', 'search', 'find', 'commit', 'regression', 'issue'],
        markdown: bisect,
    },
    {
        id: 'change-commit-message',
        title: 'Change commit message',
        description: '',
        tags: [],
        markdown: changeCommitMessage,
    },
];
