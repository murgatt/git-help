import changeCommitMessage from './change-commit-message';
import createNewBranch from './create-new-branch';
import changeRemoteTrackingBranch from './change-remote-tracking-branch';
import switchBranch from './switch-branch';
import deleteBranch from './delete-branch';

export default [createNewBranch, changeRemoteTrackingBranch, changeCommitMessage, switchBranch, deleteBranch];
