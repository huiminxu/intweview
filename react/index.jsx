this.setState({ count: this.state.count + 1 });
console.log("console: " + this.state.count); // 0


this.setState({ count: this.state.count + 1 }, () => {
  console.log("console from callback: " + this.state.count); // 2
});


this.setState(prevState => {
  console.log("console from func: " + prevState.count); // 1
  return {
    count: prevState.count + 1
  };
}, ()=>{
  console.log('last console: '+ this.state.count)
});