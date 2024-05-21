function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    getSkills: function() {
      return this.skills;
    },
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
}