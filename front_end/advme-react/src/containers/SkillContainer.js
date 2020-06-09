class FormContainer extends Component{
    
    handleSubmit = event => {
        
    }
increaseOrNew = () => {
    if (this.props.new === true){}
    else
}
    
    render(){
        const inputs =[{'name':'text'}, {'level':'select'}];
        return(
        <>
        </>  
        )
    }

}

const mapStateToProps = state => {
    return({
      user: state.username,
      user_id: state.id,
      skills: state.skills
    })
  }
  const mapDispatchToProps = dispatch => {
    return{
        createSkill: skillData => dispatch(getUser(userData)),
        upgradeSkill: skillData => dispatch(newUser(userData))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)