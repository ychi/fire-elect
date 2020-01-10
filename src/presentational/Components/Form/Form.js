import React, {useReducer} from '../../../../node_modules/react';
import styles from './form.module.scss';
import FormControl from '../../../../node_modules/@material-ui/core/FormControl';
import FormControlLabel from '../../../../node_modules/@material-ui/core/FormControlLabel';
import Box from '../../../../node_modules/@material-ui/core/Box';
import Typography from '../../../../node_modules/@material-ui/core/Typography';
import Button from '../../../../node_modules/@material-ui/core/Button';
import Checkbox from '../../../../node_modules/@material-ui/core/Checkbox';
import { Grid, Select, MenuItem } from '../../../../node_modules/@material-ui/core';
import Hidden from '../../../../node_modules/@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import HelpIcon from '@material-ui/icons/Help';
import { InputLabel } from '@material-ui/core';


import FormComplete from '../../Components/FormComplete/FormComplete';

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

const blankFormState = {
  gender: '',
  age: '',
  education: '',
  marriage: '',
  income: '',
  inhabitCity: '臺北市',
  registerCity: '臺北市',
  chineseImpact: '',
  socioeconomic: '',
  legislatorKnowledge: '',
  legislatorName: '',
  agreeTerms: false
};

function formStateReducer(state, event) {
  let s = Object.assign({}, state);
  switch (event.target.name) {
      case 'gender':
        s.gender = s.gender ? s.gender === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'age':
        s.age = s.age ? s.age === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'education':
        s.education = s.education ? s.education === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'marriage':
        s.marriage = s.marriage ? s.marriage === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'income':
        s.income = s.income ? s.income === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'inhabit-city-select':
        s.inhabitCity = event.target.value
        break;
      case 'register-city-select':
        s.registerCity = event.target.value
        break;
      case 'chinese-impact':
        s.chineseImpact = s.chineseImpact ? s.chineseImpact === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'socioeconomic':
        s.socioeconomic = s.socioeconomic ? s.socioeconomic === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'legislator-knowledge':
        s.legislatorKnowledge = s.legislatorKnowledge ? s.legislatorKnowledge === event.target.value ? '' : event.target.value : event.target.value
        break;
      case 'legislator-name':
        s.legislatorName = event.target.value
        break;
      case 'agree-terms':
          s.agreeTerms = event.target.checked;
          break;
      default:
    }

    return s;
}

export default function Form({formContent, submittable, handleSubmit}) {
  const [data, handleChange] = useReducer(formStateReducer, formContent||blankFormState);
  return submittable ? (
    <Grid container>
      <Hidden xsDown>
        <Grid item xs={false} md={6}>
          <img src={require('./elipse.svg')} alt="" width="100%" />
          {/* <img src={require('./web_use-01.svg')} alt="" width="100%" /> */}

        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <img src={require('./elipse_sm.svg')} alt="" width="100%" />
          {/* <img src={require('./mobile_use-01.svg')} alt="" width="100%" /> */}
        </Grid>
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
              <Link href="/terms"><HelpIcon fontSize="small"/></Link>
            </Box>
            <Button 
              variant="contained" 
              disabled={(!submittable) || (!data.agreeTerms)} 
              className={styles.form__button} 
              width="60px"
              onClick={()=>{handleSubmit(data)}}>送出預測</Button>
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
  ) : <FormComplete/>
}


