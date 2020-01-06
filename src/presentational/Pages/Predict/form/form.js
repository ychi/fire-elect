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
            <Grid item xs={0} md={4}>                
                <img src={require('./elipse.svg')} alt=""  width="100%"/>
            </Grid>
            <Grid item xs={1} sm={0} md={0} lg={0}>
                <Box bgcolor="#E9F2F2" height="100%"></Box>
            </Grid>
            <Grid item xs={10} md={6} className={styles.form__inputArea}>
                <Box height="7vh"></Box>
                <Box textAlign='left' fontSize="12px">
                    <Typography>
                        <Box ml={3}>送出前</Box>
                        <Box ml={3}>幫助我們了解你是誰</Box>
                    </Typography>
                    <hr width="90%"/>
                    <Box ml={3} mb={1}>
                        <label for="name" className={styles.form__label}>性別:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="m" />} label="男" display='inline' />
                            <FormControlLabel control={<Checkbox value="f" />} label="女" display='inline' />
                        </FormControl>
                    </Box>
                    <Box ml={3} mb={1}>
                        <label for="age" className={styles.form__label}>年齡:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="20" />} label="20以下" />
                            <FormControlLabel control={<Checkbox value="29" />} label="20-29" />
                            <FormControlLabel control={<Checkbox value="39" />} label="30-39" />
                            <FormControlLabel control={<Checkbox value="49" />} label="40-49" />
                            <FormControlLabel control={<Checkbox value="59" />} label="50-59" />
                            <FormControlLabel control={<Checkbox value="60" />} label="60以上" />
                        </FormControl>
                    </Box>
                    <Box ml={3} mb={1}>
                        <label for="edu" className={styles.form__label}>教育程度:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="elementary school" />} label="小學" />
                            <FormControlLabel control={<Checkbox value="mid-high school" />} label="國中" />
                            <FormControlLabel control={<Checkbox value="high school" />} label="高中" />
                            <FormControlLabel control={<Checkbox value="bachelor" />} label="大學" />
                            <FormControlLabel control={<Checkbox value="master" />} label="碩士" />
                            <FormControlLabel control={<Checkbox value="doctor" />} label="博士" />
                        </FormControl>
                    </Box>
                    <Box ml={3} mb={1}>
                        <label for="marriage" className={styles.form__label}>婚姻狀況:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="married" />} label="已婚" />
                            <FormControlLabel control={<Checkbox value="single" />} label="未婚" />
                            <FormControlLabel control={<Checkbox value="others" />} label="其他" />
                        </FormControl>
                    </Box>
                    <Box ml={3} mb={1}>   
                        <label for="income" className={styles.form__label}>收入:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="$" />} label="$" />
                            <FormControlLabel control={<Checkbox value="$$" />} label="$$" />
                            <FormControlLabel control={<Checkbox value="$$$" />} label="$$$" />
                            <FormControlLabel control={<Checkbox value="$$$$" />} label="$$$$" />
                            <FormControlLabel control={<Checkbox value="$$$$$" />} label="$$$$$" />
                        </FormControl>
                    </Box>
                    <Box display="inline" mr={28} ml={3} mb={1} align="left">
                        <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label="我同意隱私條款"
                            labelPlacement="end"
                        />
                    </Box>
                    <Box textAlign="right" width="90%">
                        <Button variant="contained" color="#273A3C" className={styles.form__button} width="60px">送出預測</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={1} sm={0} md={0} lg={0}><Box height="100%" bgcolor="#E9F2F2"></Box></Grid>
            <Grid item xs={12} sm={0}>
                <Box height="100%" className={styles.form__inputArea}>
                    
                </Box>
            </Grid>

        </Grid>
)}


