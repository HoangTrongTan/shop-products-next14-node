'use client'

import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
  useTheme
} from '@mui/material';
import * as yup from 'yup'
import { NextPage } from 'next'
import CustomTextField from 'src/components/text-field'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EMAIL_REG, PASSWORD_REG } from 'src/configs/regex'
import { useState } from 'react'
import IconifyIcon from 'src/components/Icon'
import Image from 'next/image'
import RegisterDark from '/public/images/register-dark.png'
import RegisterLight from '/public/images/register-light.png'
import Link from 'next/link'

type TProps = {}

type TDefaultValues = {
  email: string
  password: string
  confirm_password: string
}

const RegisterPage: NextPage<TProps> = () => {
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const schema = yup
    .object()
    .shape({
      email: yup.string().required().matches(EMAIL_REG, 'the field is must email type'),
      password: yup
        .string()
        .required()
        .matches(PASSWORD_REG, 'the passwword is contain charactor, special charactor , number'),
      confirm_password: yup
        .string()
        .required()
        .matches(PASSWORD_REG, 'the passwword is contain charactor, special charactor , number')
        .oneOf([yup.ref('password'), ''], 'The confim password is must match with password')
    })
    .required()

  const defaultValues: TDefaultValues = {
    email: '',
    password: '',
    confirm_password: ''
  }

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: { email: string; password: string }) => {
    console.log('lêu lêu lêu ', data, errors)
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <Box
        display={{
          md: 'flex',
          xs: 'none'
        }}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          backgroundColor: theme.palette.customColors.bodyBg,
          height: '100%',
          minWidth: '50vw'
        }}
      >
        <Image
          src={theme.palette.mode === 'light' ? RegisterLight : RegisterDark}
          alt='error background'
          style={{ height: '100%', width: '100%' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextField
                    fullWidth
                    label='Email *'
                    autoComplete='email'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.email)}
                    helperText={errors?.email?.message}
                  />
                )}
                name='email'
              />
            </Box>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextField
                    fullWidth
                    label='Password *'
                    autoComplete='password'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.password)}
                    helperText={errors?.password?.message}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={() => setShowPassword(prev => !prev)}>
                            {showPassword ? (
                              <IconifyIcon icon='material-symbols:visibility-outline' />
                            ) : (
                              <IconifyIcon icon='ic:outline-visibility-off' />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                name='password'
              />
            </Box>
            <Box>
              <Controller
                control={control}
                rules={{
                  required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <CustomTextField
                    fullWidth
                    label='Confirm Password *'
                    autoComplete='password'
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={Boolean(errors.confirm_password)}
                    helperText={errors?.confirm_password?.message}
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton edge='end' onClick={() => setShowConfirmPassword(prev => !prev)}>
                            {showConfirmPassword ? (
                              <IconifyIcon icon='material-symbols:visibility-outline' />
                            ) : (
                              <IconifyIcon icon='ic:outline-visibility-off' />
                            )}
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                name='confirm_password'
              />
            </Box>
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' name='checkbox' />}
              label='Remember me'
            />
            <Link href='#'>Forgot password?</Link>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography>{'Don you have already account?'}</Typography>
              <Link href='/login'>{'Log in'}</Link>
            </Box>
            <Typography sx={{ textAlign: 'center', mt: 2, mb: 2 }}>or</Typography>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterPage
