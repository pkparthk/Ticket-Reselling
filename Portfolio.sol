// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Portfolio {
    struct Project {
        uint id;
        string name;
        string description;
        string image;
        string githubLink;
    }

    struct Education {
        uint id;
        string date;
        string degree;
        string knowledgeAcquired;
        string institutionName;
    }

    Project[] public projects; // Changed to a dynamic array
    Education[3] public educationDetails;

    string public imageLink = "Profile image link";
    string public description = "description";
    string public resumeLink = "Resume link";
    uint educationCount;
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    modifier onlyManager() {
        require(manager == msg.sender, "You are not the manager");
        _;
    }

    function insertProject(
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _githubLink
    ) external {
        projects.push(Project(projects.length, _name, _description, _image, _githubLink));
    }

    function changeProject(
        uint _projectId,
        string calldata _name,
        string calldata _description,
        string calldata _image,
        string calldata _githubLink
    ) external {
        require(_projectId < projects.length, "Invalid project ID");
        projects[_projectId] = Project(_projectId, _name, _description, _image, _githubLink);
    }

    function allProjects() external view returns (Project[] memory) {
        return projects;
    }

    function insertEducation(
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _institutionName
    ) external onlyManager {
        require(educationCount < 3, "Only 3 education details allowed");
        educationDetails[educationCount] = Education(
            educationCount,
            _date,
            _degree,
            _knowledgeAcquired,
            _institutionName
        );
        educationCount++;
    }

    function changeEducation(
        uint _educationDetailId,
        string calldata _date,
        string calldata _degree,
        string calldata _knowledgeAcquired,
        string calldata _institutionName
    ) external onlyManager {
        require(_educationDetailId < 3, "Invalid education ID");
        educationDetails[_educationDetailId] = Education(
            _educationDetailId,
            _date,
            _degree,
            _knowledgeAcquired,
            _institutionName
        );
    }

    function allEducationDetails() external view returns (Education[3] memory) {
        return educationDetails;
    }

    function changeDescription(string calldata _description) external {
        description = _description;
    }

    function changeResume(string calldata _resumeLink) external onlyManager {
        resumeLink = _resumeLink;
    }

    function changeImage(string calldata _imageLink) external onlyManager {
        imageLink = _imageLink;
    }

    function donate() public payable {
        payable(manager).transfer(msg.value);
    }
}
