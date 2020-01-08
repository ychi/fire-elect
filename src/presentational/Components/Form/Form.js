import React from '../../../../node_modules/react';
import styles from './form.module.scss';
import FormGroup from '../../../../node_modules/@material-ui/core/FormGroup';
import FormControl from '../../../../node_modules/@material-ui/core/FormControl';
import FormControlLabel from '../../../../node_modules/@material-ui/core/FormControlLabel';
import FormLabel from '../../../../node_modules/@material-ui/core/FormLabel';
import FormHelperText from '../../../../node_modules/@material-ui/core/FormHelperText';
import InputLabel from '../../../../node_modules/@material-ui/core/InputLabel';
import Input from '../../../../node_modules/@material-ui/core/Input';
import Box from '../../../../node_modules/@material-ui/core/Box';
import Typography from '../../../../node_modules/@material-ui/core/Typography';
import Button from '../../../../node_modules/@material-ui/core/Button';
import Checkbox from '../../../../node_modules/@material-ui/core/Checkbox';
import { Grid } from '../../../../node_modules/@material-ui/core';
import Hidden from '../../../../node_modules/@material-ui/core/Hidden';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function Form() {
    const [livingCity, setLivingCity] = React.useState('');
    const [city, setCity] = React.useState('');
    const [education, setEducation] = React.useState('');
    const [age, setAge] = React.useState('');
    const [chinaInfluence, setChinaInfluence] = React.useState('');
    const [socialOpinion, setSocialOpinion] = React.useState('');



    const cities = ['台北市','新北市','桃園市','新竹縣','苗栗縣','台中市','彰化縣','雲林縣','嘉義縣','台南市','高雄市','屏東縣','宜蘭縣','花蓮縣','台東縣']
    const educations = ['國中以下','高中職肄業','高中職畢業','大學/大專肄業','大學/大專畢業','研究所']
    const ages = ['20以下','20-29','30-39','40-49','50-59','60以上']
    const opinions =['非常不同意','不同意','普通','同意','非常同意','沒意見'] 

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleCityChange(e){
        setCity(e.target.value)
    }
    function handleLivingCityChange(e){
        setLivingCity(e.target.value)
    }
    function handleEducationChange(e){
        setEducation(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value)
    }
    function handleChinaInfluenceChange(e){
        setChinaInfluence(e.target.value)
    }
    function handleSocialOpinionChange(e){
        setSocialOpinion(e.target.value)
    }


    return(
        <Grid container>
            <Grid item xs={0} md={6}>                
                <img src={require('./elipse.svg')} alt=""  width="100%"/>
            </Grid>
            <Hidden mdUp>
                <Grid item xs={1} md={0}>
                    <Box bgcolor="#E9F2F2" height="100%"></Box>
                </Grid>
            </Hidden>
            <Grid item xs={10} md={6} className={styles.form__inputArea}>
                
                <Box height="7vh"></Box>

                <Box textAlign='left'>
                    <Typography>
                        <Box ml={3}>送出前</Box>
                        <Box ml={3}>幫助我們了解你是誰</Box>
                    </Typography>
                    <hr width="92%"/>
                    <Box ml={3} mb={1}>
                        <label for="name" className={styles.form__label}>性別:</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="m" />} label="男" display='inline' />
                            <FormControlLabel control={<Checkbox value="f" />} label="女" display='inline' />
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>

                    <Box ml={3} mb={1} >
                        <InputLabel id="age-select-label" for="" className={styles.form__label}>年齡</InputLabel>
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="age-select-label"
                            id="age__Select"
                            value={age}
                            onChange={handleAgeChange}
                            >
                            {ages.map((c)=>{
                            return(<MenuItem value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    
                        <InputLabel id="edu-select-label" for="" className={styles.form__label}>教育程度</InputLabel>                        
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="edu-select-label"
                            id="edu__Select"
                            value={education}
                            onChange={handleEducationChange}
                            >
                            {educations.map((c)=>{
                            return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>

                    <Box ml={3} mb={1} display="inline-block">
                        <InputLabel id="livingCity-select-label" for="" className={styles.form__label}>居住縣市</InputLabel>
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="livingCity-select-label"
                            id="livingCity__Select"
                            value={livingCity}
                            onChange={handleLivingCityChange}
                            >
                            {cities.map((c)=>{
                            return(<MenuItem value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>

                        <InputLabel id="city-select-label" for="" className={styles.form__label}>戶籍縣市</InputLabel>                        
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="city-select-label"
                            id="city__Select"
                            value={city}
                            onChange={handleCityChange}
                            >
                            {cities.map((c)=>{
                            return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>

                    <Box ml={3} mb={1}>
                        <label id="influence-select-label" for=""  className={styles.form__label__long}>對於「中國對台灣社會的影響整體而言是好的」這敘述，我的看法是：</label>
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="influence-select-label"
                            id="influence__Select"
                            value={chinaInfluence}
                            onChange={handleChinaInfluenceChange}
                            >
                            {opinions.map((c)=>{
                            return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>

                    <Box ml={3} mb={1}>   
                        <label id="social-select-label" for=""  className={styles.form__label__long}>我認為我對經濟、社會議題的態度偏向：</label>
                        <FormControl className={styles.formControl}>
                            <Select
                            labelId="social-select-label"
                            id="social__Select"
                            value={socialOpinion}
                            onChange={handleSocialOpinionChange}
                            >
                            {opinions.map((c)=>{
                            return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
                            })}
                            </Select>
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>

                    <Box ml={3} mb={1}>   
                        <label for="income" className={styles.form__label__long}>您知道您所屬選區現任立委是誰嗎？</label>
                        <FormControl className={styles.checkBox__dir}>
                            <FormControlLabel control={<Checkbox value="$" />} label="知道" />
                            <FormControlLabel control={<Checkbox value="$$" />} label="不知道" />
                        </FormControl>
                    </Box>
                    <hr className={styles.form__hr}/>
                    <Box textAlign="right" width="95%">
                        <Box display="inline" mr="30px">
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="我同意隱私條款"
                                labelPlacement="end"
                            />
                        </Box>
                        <Button variant="contained" color="#273A3C" className={styles.form__button} width="60px">送出預測</Button>
                    </Box>
                </Box>
            </Grid>
            <Hidden mdUp>
                <Grid item xs={1} md={0}><Box height="100%" bgcolor="#E9F2F2"></Box></Grid>
            </Hidden>
            <Grid item xs={12} md={0}>
                <Box height="100%" className={styles.form__inputArea}>
                       
                </Box>
            </Grid>

        </Grid>
)}


