const obj = {
  name: "비실이",
  introduce() {
    console.log(`hello, ${this.name}`); // this.name == obj.name
  },
};

obj.introduce();
