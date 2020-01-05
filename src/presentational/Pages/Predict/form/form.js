import React from 'react';
import styles from './form.module.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid } from '@material-ui/core';


export default function Form() {
    function handleSubmit(e) {

        e.preventDefault();
    }

    return(
        <Grid container>
            <Grid container md={6}>                
                <Grid item md={6}>
                    <Box height="100%" bgcolor="#273A3C">
                        <Box className={styles.form__oval_left}></Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box height="100%" bgcolor="#E9F2F2">
                        <Box className={styles.form__oval_right}></Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item md={5} className={styles.form__inputArea}>
                <Box height="7vh"></Box>
                <Box height="53vh" textAlign='left'>
                    <Typography>
                        <Box>送出前</Box>
                        <Box>幫助我們了解你是誰</Box>
                    </Typography>
                    <hr/>
                    <Box>
                        <FormControl className={styles.checkBox__dir}>
                            <label for="name">性別:</label>
                            <FormControlLabel control={<Checkbox value="m" />} label="男" display='inline' />
                            <FormControlLabel control={<Checkbox value="f" />} label="女" display='inline' />
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl className={styles.checkBox__dir}>
                            <label for="name">年齡:</label>
                            <FormControlLabel control={<Checkbox value="20" />} label="20以下" />
                            <FormControlLabel control={<Checkbox value="29" />} label="20-29" />
                            <FormControlLabel control={<Checkbox value="39" />} label="30-39" />
                            <FormControlLabel control={<Checkbox value="49" />} label="40-49" />
                            <FormControlLabel control={<Checkbox value="59" />} label="50-59" />
                            <FormControlLabel control={<Checkbox value="60" />} label="60以上" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl className={styles.checkBox__dir}>
                            <label for="name">教育程度:</label>
                            <FormControlLabel control={<Checkbox value="elementary school" />} label="小學" />
                            <FormControlLabel control={<Checkbox value="mid-high school" />} label="國中" />
                            <FormControlLabel control={<Checkbox value="high school" />} label="高中" />
                            <FormControlLabel control={<Checkbox value="bachelor" />} label="大學" />
                            <FormControlLabel control={<Checkbox value="master" />} label="碩士" />
                            <FormControlLabel control={<Checkbox value="doctor" />} label="博士" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl className={styles.checkBox__dir}>
                            <label for="name">婚姻狀況:</label>
                            <FormControlLabel control={<Checkbox value="married" />} label="已婚" />
                            <FormControlLabel control={<Checkbox value="single" />} label="未婚" />
                            <FormControlLabel control={<Checkbox value="others" />} label="其他" />
                        </FormControl>
                    </Box>
                    <Box>   
                        <FormControl className={styles.checkBox__dir}>
                            <label for="name">收入:</label>
                            <FormControlLabel control={<Checkbox value="$" />} label="$" />
                            <FormControlLabel control={<Checkbox value="$$" />} label="$$" />
                            <FormControlLabel control={<Checkbox value="$$$" />} label="$$$" />
                            <FormControlLabel control={<Checkbox value="$$$$" />} label="$$$$" />
                            <FormControlLabel control={<Checkbox value="$$$$$" />} label="$$$$$" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="我同意隱私條款"
                            labelPlacement="end"
                        />
                    </Box>
                    <Button variant="contained" color="#273A3C">送出</Button>
                </Box>
            </Grid>
            <Grid item md={1}>
                <Box height="100%" className={styles.form__inputArea}></Box>
            </Grid>



        </Grid>
)}


