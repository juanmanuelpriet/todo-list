import {Header,Icon,Grid,Button,Segment,Label} from "semantic-ui-react";
export default function Task(props) {
    const {task,deleteTask}=props;
    const {idTask,taskName, categorytask}=task;
    if(task.length===0){
        return null;
    }
    return (
        <Grid.Column width={8} className="task-continer">
            <Segment>
            {categorytask &&(
                <Label color="teal" ribbon="right">
                    {categorytask}
                </Label>
            )}
            <Header as="h3" className="header-task" >
              {taskName} 
            </Header>
            <Header as="h5">{idTask}</Header>
            <Grid centered columns={2}>
              <Grid.Column>
                <Button color="red" onClick={()=>deleteTask(idTask)}>
                    <Icon name="remove circle"></Icon>
                    Eliminar
                </Button>
              </Grid.Column>
            </Grid>
            </Segment>
        </Grid.Column>
    );
};
