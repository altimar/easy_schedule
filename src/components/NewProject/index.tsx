import React from 'react';
import { ProjectType, DEMO_PROJECT_TYPE, EMPTY_PROJECT_TYPE } from '../../store/types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import empty_schedule_svg from './images/empty_schedule.svg'
import demo_schedule_svg from './images/demo_schedule.svg'
import styles from "./styles.module.css";

interface ModalProps {
  onOk?: (project_type: ProjectType) => void,
}

export default function NewProject(props: ModalProps) {

  function onSaveClick(project_type: ProjectType) {
    props.onOk && props.onOk(project_type);
  }

  return (
    <Container>
      <h1>Create a new schedule project</h1>
    <Grid container justifyContent="center" spacing={10}>
      <Grid item>
        <Card className={styles.project_type_card} onClick={() => { onSaveClick(EMPTY_PROJECT_TYPE) }}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={styles.schedule_media}
              image={empty_schedule_svg}
              title="Empty schedule image"
            />
            <CardHeader title="Blank" />
            <CardContent>
              Create blank schedule.
              </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Card className={styles.project_type_card} onClick={() => onSaveClick(DEMO_PROJECT_TYPE)}>
          <CardActionArea>
            <CardMedia
              className={styles.schedule_media}
              image={demo_schedule_svg}
              title="Demo schedule image"
            />
            <CardHeader title="Demo" />
            <CardContent>
              Create demo schedule with random data.
              </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
    </Container>
  );
}