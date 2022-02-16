# CSS Career Guide Contribution Guidelines

## Introduction
The CSS Career Guide follows a typical Git Workflow to manage public contributions and get them merged into the main guide website. Please read this entire document before submitting work to the guide in this repository.

## Suggesting Changes / Additions
To suggest new content or changes (such as a new guide section or fixing outdated info) please open a [Github Issue](https://github.com/CSS-Student-Advisory-Council/css-career-guide/issues) within the repository. In this issue, please set a descriptive title and fill in the following issue template: 
```
**What is the addition/change you are proposing?**


**Which section(s) of the guide will this addition/change affect?**


**(If non-trivial addition or change) Why should the addition/change be added into the guide?**


**Issue-Related Info (Resources, References, Additional Notes)**

```

For a larger issue such as suggesting a whole new section, this may need to be approved by CSS SAC members before it will be merged into the main guide. However, you may begin work on it if you wish once the issue is created.

## Contribution Workflow
Once you have created an issue, you can now begin to make changes locally. Please follow this Git workflow to ensure your changes are reviewed and merged properly:
1. Clone this repository
```Shell
git clone https://github.com/CSS-Student-Advisory-Council/css-career-guide.git
```
2. Create a new local branch using the following convention:
```Shell
<author>_<branch-type>_<issue-id>_<branch-name>
```
Where `author` is your GitHub username, `branch-type` is a short descriptor of the change you are doing (such as `feature`, `bugfix`, etc), `issue-id` is the associated GitHub Issue ID number for this change, and `branch-name` is short title for the changes being done.
<br>
<br>
For example, a viable branch name would be:
```
kosamson_feature_42_add-dynamic-programming-resources
```
3. Complete your changes on this local branch
4. **Commit** and **Push** your new branch to this repository
```Shell
git commit && git push origin -u <branch-name>
```
5. Open a **Pull Request** to the `main` branch from your repository

Once you have opened this Pull Request, a member of the CSS SAC team will review your submission and will either directly merge it into the `main` branch or will leave a comment asking for changes or clarifications prior to the merge. 

## Thank you!
Thank you for reading these guidelines and helping to improve the CSS Career Guide! We highly appreciate your contributions that will improve the career knowledge and resources for many future generations of CSS Students. 