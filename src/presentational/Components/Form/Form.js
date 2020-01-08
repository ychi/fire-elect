import React from '../../../../node_modules/react';
import styles from './form.module.scss';
import FormControl from '../../../../node_modules/@material-ui/core/FormControl';
import FormControlLabel from '../../../../node_modules/@material-ui/core/FormControlLabel';
import Box from '../../../../node_modules/@material-ui/core/Box';
import Typography from '../../../../node_modules/@material-ui/core/Typography';
import Button from '../../../../node_modules/@material-ui/core/Button';
import Checkbox from '../../../../node_modules/@material-ui/core/Checkbox';
import { Grid, Select, MenuItem } from '../../../../node_modules/@material-ui/core';
import Hidden from '../../../../node_modules/@material-ui/core/Hidden';

// Conflict
// <<<<<<< HEAD
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';

// export default function Form() {
//     const [livingCity, setLivingCity] = React.useState('');
//     const [city, setCity] = React.useState('');
//     const [education, setEducation] = React.useState('');
//     const [age, setAge] = React.useState('');
//     const [chinaInfluence, setChinaInfluence] = React.useState('');
//     const [socialOpinion, setSocialOpinion] = React.useState('');



//     const cities = ['台北市','新北市','桃園市','新竹縣','苗栗縣','台中市','彰化縣','雲林縣','嘉義縣','台南市','高雄市','屏東縣','宜蘭縣','花蓮縣','台東縣']
//     const educations = ['國中以下','高中職肄業','高中職畢業','大學/大專肄業','大學/大專畢業','研究所']
//     const ages = ['20以下','20-29','30-39','40-49','50-59','60以上']
//     const opinions =['非常不同意','不同意','普通','同意','非常同意','沒意見'] 

//     function handleSubmit(e) {
//         e.preventDefault();
//     }

//     function handleCityChange(e){
//         setCity(e.target.value)
//     }
//     function handleLivingCityChange(e){
//         setLivingCity(e.target.value)
//     }
//     function handleEducationChange(e){
//         setEducation(e.target.value)
//     }
//     function handleAgeChange(e){
//         setAge(e.target.value)
//     }
//     function handleChinaInfluenceChange(e){
//         setChinaInfluence(e.target.value)
//     }
//     function handleSocialOpinionChange(e){
//         setSocialOpinion(e.target.value)
//     }


//     return(
//         <Grid container>
//             <Grid item xs={0} md={6}>                
//                 <img src={require('./elipse.svg')} alt=""  width="100%"/>
//             </Grid>
//             <Hidden mdUp>
//                 <Grid item xs={1} md={0}>
//                     <Box bgcolor="#E9F2F2" height="100%"></Box>
//                 </Grid>
//             </Hidden>
//             <Grid item xs={10} md={6} className={styles.form__inputArea}>
                
//                 <Box height="7vh"></Box>

//                 <Box textAlign='left'>
//                     <Typography>
//                         <Box ml={3}>送出前</Box>
//                         <Box ml={3}>幫助我們了解你是誰</Box>
//                     </Typography>
//                     <hr width="92%"/>
//                     <Box ml={3} mb={1}>
//                         <label for="name" className={styles.form__label}>性別:</label>
//                         <FormControl className={styles.checkBox__dir}>
//                             <FormControlLabel control={<Checkbox value="m" />} label="男" display='inline' />
//                             <FormControlLabel control={<Checkbox value="f" />} label="女" display='inline' />
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>

//                     <Box ml={3} mb={1} >
//                         <InputLabel id="age-select-label" for="" className={styles.form__label}>年齡</InputLabel>
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="age-select-label"
//                             id="age__Select"
//                             value={age}
//                             onChange={handleAgeChange}
//                             >
//                             {ages.map((c)=>{
//                             return(<MenuItem value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>
                    
//                         <InputLabel id="edu-select-label" for="" className={styles.form__label}>教育程度</InputLabel>                        
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="edu-select-label"
//                             id="edu__Select"
//                             value={education}
//                             onChange={handleEducationChange}
//                             >
//                             {educations.map((c)=>{
//                             return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>

//                     <Box ml={3} mb={1} display="inline-block">
//                         <InputLabel id="livingCity-select-label" for="" className={styles.form__label}>居住縣市</InputLabel>
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="livingCity-select-label"
//                             id="livingCity__Select"
//                             value={livingCity}
//                             onChange={handleLivingCityChange}
//                             >
//                             {cities.map((c)=>{
//                             return(<MenuItem value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>

//                         <InputLabel id="city-select-label" for="" className={styles.form__label}>戶籍縣市</InputLabel>                        
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="city-select-label"
//                             id="city__Select"
//                             value={city}
//                             onChange={handleCityChange}
//                             >
//                             {cities.map((c)=>{
//                             return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>

//                     <Box ml={3} mb={1}>
//                         <label id="influence-select-label" for=""  className={styles.form__label__long}>對於「中國對台灣社會的影響整體而言是好的」這敘述，我的看法是：</label>
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="influence-select-label"
//                             id="influence__Select"
//                             value={chinaInfluence}
//                             onChange={handleChinaInfluenceChange}
//                             >
//                             {opinions.map((c)=>{
//                             return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>

//                     <Box ml={3} mb={1}>   
//                         <label id="social-select-label" for=""  className={styles.form__label__long}>我認為我對經濟、社會議題的態度偏向：</label>
//                         <FormControl className={styles.formControl}>
//                             <Select
//                             labelId="social-select-label"
//                             id="social__Select"
//                             value={socialOpinion}
//                             onChange={handleSocialOpinionChange}
//                             >
//                             {opinions.map((c)=>{
//                             return(<MenuItem className={styles.menuItem} value={c}>{c}</MenuItem>)
//                             })}
//                             </Select>
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>

//                     <Box ml={3} mb={1}>   
//                         <label for="income" className={styles.form__label__long}>您知道您所屬選區現任立委是誰嗎？</label>
//                         <FormControl className={styles.checkBox__dir}>
//                             <FormControlLabel control={<Checkbox value="$" />} label="知道" />
//                             <FormControlLabel control={<Checkbox value="$$" />} label="不知道" />
//                         </FormControl>
//                     </Box>
//                     <hr className={styles.form__hr}/>
//                     <Box textAlign="right" width="95%">
//                         <Box display="inline" mr="30px">
//                             <FormControlLabel
//                                 value="end"
//                                 control={<Checkbox color="primary" />}
//                                 label="我同意隱私條款"
//                                 labelPlacement="end"
//                             />
//                         </Box>
//                         <Button variant="contained" color="#273A3C" className={styles.form__button} width="60px">送出預測</Button>
//                     </Box>
//                 </Box>
//             </Grid>
//             <Hidden mdUp>
//                 <Grid item xs={1} md={0}><Box height="100%" bgcolor="#E9F2F2"></Box></Grid>
//             </Hidden>
//             <Grid item xs={12} md={0}>
//                 <Box height="100%" className={styles.form__inputArea}>
                       
//                 </Box>
//             </Grid>
// =======
import TextField from '@material-ui/core/TextField';


const formOptions = {
  gender: [
    { value: 'm', label: '男' },
    { value: 'f', label: '女' }],
  age: [
    { value: '20', label: '20以下' },
    { value: '29', label: '20-29' },
    { value: '39', label: '30-39' },
    { value: '49', label: '40-49' },
    { value: '59', label: '50-59' },
    { value: '60', label: '60以上' }],
  education: [
    { value: 'elementary school', label: '小學' },
    { value: 'mid-high school', label: '國中' },
    { value: 'high school', label: '高中' },
    { value: 'bachelor', label: '大學' },
    { value: 'master', label: '碩士' },
    { value: 'doctor', label: '博士' }],
  marriage: [
    { value: 'married', label: '已婚' },
    { value: 'single', label: '未婚' },
    { value: 'others', label: '其他' },
  ],
  income: [
    { value: '$', label: '$' },
    { value: '$$', label: '$$' },
    { value: '$$$', label: '$$$' },
    { value: '$$$$', label: '$$$$' },
    { value: '$$$$$', label: '$$$$$' },
  ],
  inhabitCity: ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣", "基隆市", "新竹市", "嘉義市"],
  chineseImpact: [
    { value: 'strong-disagree', label: '非常不同意' },
    { value: 'disagree', label: '不同意' },
    { value: 'neutral', label: '普通' },
    { value: 'agree', label: '同意' },
    { value: 'strong-agree', label: '非常同意' },
    { value: 'no-opinion', label: '沒意見' }
  ],
  socioeconomic: [
    { value: 'very-traditional', label: '非常傳統' },
    { value: 'traditional', label: '傳統' },
    { value: 'neutral', label: '普通' },
    { value: 'free', label: '自由' },
    { value: 'very-free', label: '非常自由' },
    { value: 'no-opinion', label: '沒意見' }
  ],
  legislator: [
    { value: 'no', label: '否' },
    { value: 'yes', label: '知道' }
  ]

};

export default function Form({data, handleChange, submittable, handleSubmit}) {
  /*TODO: return submittable ? (資料送出) : form */
  return (
    <Grid container>
      <Grid item xs={false} md={6}>
        <img src={require('./elipse.svg')} alt="" width="100%" />
      </Grid>
      <Hidden mdUp>
        <Grid item xs={1} md={false}>
          <Box bgcolor="#E9F2F2" height="100%"></Box>
        </Grid>
      </Hidden>
      <Grid item xs={10} md={6} className={styles.form__inputArea}>

        <Box height="7vh"></Box>

        <Box textAlign='left' fontSize="12px">
          <Box ml={3}><Typography>送出前</Typography></Box>
          <Box ml={3}><Typography>幫助我們了解你是誰</Typography></Box>
          <hr width="90%" />
          <Box ml={3} mb={1}>
            <label htmlFor="name" className={styles.form__label}>性別:</label>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.gender.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox name='gender' disabled={!submittable} value={opt.value} checked={data.gender === opt.value} onChange={handleChange} />} label={opt.label} display='inline' />
              )}
            </FormControl>
          </Box>
          <Box ml={3} mb={1}>
            <label htmlFor="age" className={styles.form__label}>年齡:</label>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.age.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox disabled={!submittable} name='age' value={opt.value} checked={data.age === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>
          <Box ml={3} mb={1}>
            <label htmlFor="edu" className={styles.form__label}>教育程度:</label>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.education.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox name='education' disabled={!submittable} value={opt.value} checked={data.education === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>
          {/* <Box ml={3} mb={1}>
            <label htmlFor="marriage" className={styles.form__label}>婚姻狀況:</label>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.marriage.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox name='marriage' disabled={!submittable} value={opt.value} checked={data.marriage === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>
          <Box ml={3} mb={1}>
            <label htmlFor="income" className={styles.form__label}>收入:</label>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.income.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox name='income' disabled={!submittable} value={opt.value} checked={data.income === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>
          <hr width="90%" /> */}

          <Box display="flex" flexDirection="row">
            <Box ml={3} mb={1}>
              <FormControl className={styles.checkBox__dir}>
                <label htmlFor="inhabit" className={styles.form__label__reside}>居住縣市</label>
                <Select
                  labelId="inhabit-city-select-label"
                  name="inhabit-city-select"
                  value={data.inhabitCity}
                  onChange={handleChange}
                  disabled={!submittable}
                >
                  {formOptions.inhabitCity.map((opt, idx) =>
                    <MenuItem key={idx} value={opt}>{opt}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Box ml={3} mb={1}>
              <FormControl className={styles.checkBox__dir}>
                <label htmlFor="register" className={styles.form__label}>戶籍縣市</label>
                <Select
                  labelId="register-city-select-label"
                  name="register-city-select"
                  value={data.registerCity}
                  onChange={handleChange}
                  disabled={!submittable}
                >
                  {formOptions.inhabitCity.map((opt, idx) =>
                    <MenuItem key={idx} value={opt}>{opt}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
          </Box>

          <hr width="90%" />
          <Box textAlign='left'>
            <Box ml={3} className={styles.form__label__long}><Typography>對於「中國對台灣社會的影響整體而言是好的」這敘述，我的看法是：</Typography></Box>
          </Box>
          <Box ml={3} mb={1}>

            <FormControl className={styles.checkBox__dir}>
              {formOptions.chineseImpact.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox disabled={!submittable} name='chinese-impact' value={opt.value} checked={data.chineseImpact === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>
          <hr width="90%" />

          <Box textAlign='left'>
            <Box ml={3}  className={styles.form__label__long}><Typography>我認為我對經濟、社會議題的態度偏向：</Typography></Box>
          </Box>
          <Box ml={3} mb={1}>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.socioeconomic.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox disabled={!submittable} name='socioeconomic' value={opt.value} checked={data.socioeconomic === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
            </FormControl>
          </Box>

          <hr width="90%" />
          <Box textAlign='left'>
            <Box ml={3}  className={styles.form__label__long}><Typography>您知道您所屬選區現任立委是誰嗎？</Typography></Box>
          </Box>
          <Box ml={3} mb={1}>
            <FormControl className={styles.checkBox__dir}>
              {formOptions.legislator.map((opt, idx) =>
                <FormControlLabel key={idx} control={<Checkbox disabled={!submittable} name='legislator-knowledge' value={opt.value} checked={data.legislatorKnowledge === opt.value} onChange={handleChange} />} label={opt.label} />
              )}
              <TextField disabled={!submittable} name="legislator-name" id="standard-basic" label="請輸入立委名" />
            </FormControl>
          </Box>
          <hr width="90%" />
          <Box textAlign="right" width="95%">
            <Box display="inline" mr="30px">
              <FormControlLabel
                value='0'
                control={<Checkbox disabled={!submittable} name="agree-terms" color="primary" onChange={handleChange} />}
                label="我同意隱私條款"
                labelPlacement="end"
              />
            </Box>
            <Button 
              variant="contained" 
              disabled={(!submittable) || (!data.agreeTerms)} 
              className={styles.form__button} 
              width="60px"
              onClick={handleSubmit}>送出預測</Button>
          </Box>
        </Box>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={1} md={false}><Box height="100%" bgcolor="#E9F2F2"></Box></Grid>
      </Hidden>
      <Grid item xs={12} md={false}>
        <Box height="100%" className={styles.form__inputArea}>

        </Box>
      </Grid>

    </Grid>
  )
}


