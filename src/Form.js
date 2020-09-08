import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockedOutLinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles"

class Form extends Component {
    render(){
        const { classes } = this.props;
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockedOutLinedIcon />
                    </Avatar>
                    <Typography variant="h5">
                        Sign In
                    </Typography>
                    <Select value="english">
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" name="email" autofocus></Input>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" name="password" autofocus></Input>
                        </FormControl>
                        <FormControlLabel 
                        label="Remember me"
                        control={<Checkbox color="primary"/>}/>
                        <Button variant="contained" type="submit" color="primary" fullWidth className={classes.submit}>Sign In</Button>
                    </form>
                </Paper>

            </main>
        )
    }
}

export default withStyles(styles)(Form);