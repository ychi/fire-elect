import React from 'react';
import styles from './predict.module.scss';
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


export default function Form() {
    return(
        <Box height="90vh" textAlign='left'>
            <Typography>
                <Box>送出前</Box>
                <Box>幫助我們了解你是誰</Box>
            </Typography>
            <hr/>
            <Box>
                <FormControl>
                    <InputLabel htmlFor="form-gender">性別</InputLabel>
                    <Input id="form-gender" aria-describedby="gender-helper-text" />
                    <FormHelperText id="gender-helper-text">請勾選您的性別</FormHelperText>
                    <Checkbox></Checkbox>
                    <Checkbox></Checkbox>
                </FormControl>
            </Box>

            <Box>
                <FormControl>
                    <InputLabel htmlFor="form-gender">年齡</InputLabel>
                    <Input id="form-gender" aria-describedby="gender-helper-text" />
                    <FormHelperText id="gender-helper-text">請勾選您的年齡</FormHelperText>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <InputLabel htmlFor="form-gender">教育程度</InputLabel>
                    <Input id="form-gender" aria-describedby="gender-helper-text" />
                    <FormHelperText id="gender-helper-text">請勾選您的教育程度</FormHelperText>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <InputLabel htmlFor="form-gender">婚姻狀況</InputLabel>
                    <Input id="form-gender" aria-describedby="gender-helper-text" />
                    <FormHelperText id="gender-helper-text">請勾選您的婚姻狀況</FormHelperText>
                </FormControl>
            </Box>
            <Box>   
                <FormControl>
                    <InputLabel htmlFor="form-gender">收入</InputLabel>
                    <Input id="form-gender" aria-describedby="gender-helper-text" />
                    <FormHelperText id="gender-helper-text">請勾選您的收入</FormHelperText>
                </FormControl>
            </Box>
            <Box>
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="我同意隱私條款"
                    labelPlacement="end"
                />
                <Button variant="contained" color="black">送出</Button>
            </Box>

        </Box>
)}


