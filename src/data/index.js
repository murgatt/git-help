import changeCommitMessage from './change-commit-message';
import changeRemoteTrackingBranch from './change-remote-tracking-branch';
import createNewBranch from './create-new-branch';
import deleteBranch from './delete-branch';
import revertFileOrDirectory from './revert-file-or-directory';
import switchBranch from './switch-branch';

export default [
    changeCommitMessage,
    changeRemoteTrackingBranch,
    createNewBranch,
    deleteBranch,
    revertFileOrDirectory,
    switchBranch,
];
