"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var GeneralItems = [{
  color: '#00B8D9',
  isFixed: true,
  label: 'Item 1',
  value: 'c'
}, {
  color: '#0052CC',
  isDisabled: false,
  label: 'Item 2',
  value: 'b'
}, {
  color: '#0052CC',
  isDisabled: true,
  label: 'Item 3',
  value: 'o'
}];
var General = {
  phone: "+1 778 834 7347",
  gender: GeneralItems,
  currentLocaltion: GeneralItems,
  citizenship: GeneralItems
};
var skillsItems = [{
  label: 'Item 1',
  value: 'c'
}, {
  label: 'Item 2',
  value: 'b'
}, {
  label: 'Item 3',
  value: 'o'
}];
var SkillsApiResponse = {
  position: {
    current: skillsItems[0],
    yearOfExperience: skillsItems[2]
  },
  workAs: {
    current: skillsItems
  },
  mainSkills: [{
    current: skillsItems[1],
    order: 0,
    yearOfExperience: skillsItems[1]
  }, {
    current: skillsItems[2],
    order: 1,
    yearOfExperience: skillsItems[1]
  }],
  openedPosition: true
};
var social = {
  linkedin: {
    value: '123'
  },
  github: {
    value: '123'
  },
  world: {
    value: '123'
  }
};
var company = {
  title: 'Google',
  rightTitle: '2006 / 2007',
  description: "Education - Startup - Belo Horizonte - Brazil"
};
var ArrayOfSkills = [{
  label: "JavaScript"
}, {
  label: "React"
}, {
  label: "Docker"
}];
var ArrayOfDescriptions = [{
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}, {
  label: "Ad tempor proident enim veniam duis. Occaecat veniam irure minim cillum"
}];
var UserPositionExperience = {
  headline: "Full Stack Developer",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var UserPositionExperience2 = {
  headline: "CTO",
  period: "Oct 2019 - Present . 3 mos",
  skills: ArrayOfSkills,
  description: ArrayOfDescriptions
};
var ArrayOfUserExperience = [];
ArrayOfUserExperience.push(UserPositionExperience);
ArrayOfUserExperience.push(UserPositionExperience2);
ArrayOfUserExperience.push(UserPositionExperience2);
company.userPositions = ArrayOfUserExperience;
var userExperience = [company, company];
var Mock = {};
Mock.General = General;
Mock.Skills = SkillsApiResponse;
Mock.SkillsItems = skillsItems;
Mock.Social = social;
Mock.UserExperience = {
  yearsOfExperience: "- 12312312",
  userExperience: userExperience
};
var _default = Mock;
exports.default = _default;