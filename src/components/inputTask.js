import { Select,Input,Button,Grid,Header,Icon } from "semantic-ui-react";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";
const options =[
    {key:"deporte",text:"Deporte",value:"deporte"},
    {key:"trabajo",text:"Trabajo",value:"trabajo"},
    {key:"amigos",text:"Amigos",value:"amigos"},
    {key:"univerisdad",text:"Universidad",value:"univerisdad"},
    {key:"ocio",text:"Ocio",value:"ocio"}
]


export default function InputTask(props) {
    const[task,setTask]=useState({
        idTask:"",
        taskName:"",
        categorytask:""
    }); 
    const[error,setError]=useState(false);
    const {creartask}=props;
    const onchangeTask =(e) =>{
        setTask({...task,
            [e.target.name]:
             e.target.value
            });
    };
    const onChangeCategoryTask = (e,data) =>{
        setTask({...task,
            [data.name]:data.value,
        })  
    };
    const onSubmitTask = (e) => {
        e.preventDefault();
        if (task.taskName.trim() === "" || task.categorytask.trim() === "") {
          setError(true);
        } else {
          setError(false);
          task.idTask=uuidv4();    
         creartask(task);
        }  
    setTask({
        idTask:"",
    taskName:"",
    categorytask:""
    })
    }
    return(
        <div>
            <Grid centered columns={2}>
                <Input type="text" action>
                    <Input size="small" 
                    icon="add"
                     placeholder="Escribe tu tarea:" 
                     iconPosition="left" 
                     name="taskName"
                     value={task.taskName}
                     onChange={onchangeTask}
                     />
                     <Select compact 
                     options={options} 
                     className="select-from-task" 
                     name="categorytask" 
                     placeholder="Categoria"
                     value={task.categorytask}
                     onChange={onChangeCategoryTask}
                     clearable
                     />
                     <Button type="submint" color="violet" onClick={onSubmitTask}>
                        Añadir tarea
                     </Button>
                </Input>       
            </Grid>
            {error && (
                <Grid centered>
                    <Header as="h4" color="red" className="alert-error-form">
                        <Icon name="close"/>
                        <Header.Content>La tarea es obligatoria</Header.Content>
                        <Icon name="close"/>
                    </Header>
                </Grid>
            )
            }
        </div>

        
        
    );
};
