// ** Icon Imports
import { TextField, TextFieldProps, styled } from '@mui/material'

const TextFieldStyled = styled(TextField)<TextFieldProps> ( ({theme}) => {
    // console.log('theme', {theme});
    
    return {
        "& .MuiInputLabel-root":{
            transform: "none",
            lineHeight: 1.2,
            position: "relative",
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.body2.fontSize
        },
        "& .MuiInputBase-root":{
            borderRadius: 8,
            backgroundColor: "transparent !important",
            border: `1px solid rgba(${theme.palette.customColors.main} , 0.2)`,
            transition: theme.transitions.create(['border-color', 'box-shadow'] , {
                duration: theme.transitions.duration.shorter
            }),
        },
        "&:before, &:after":{
            display:'none'
        }
    }
} )

const CustomTextField = (props: TextFieldProps) => {
    const { size = "small" , InputLabelProps, variant = "filled" , ...rests } = props;

    return <TextFieldStyled size={size } variant={variant} InputLabelProps={{...InputLabelProps  }} {...rests} /> 
}

export default CustomTextField
