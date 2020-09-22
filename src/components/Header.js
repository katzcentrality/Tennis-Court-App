import React from 'react';
import {Box, Typography} from '@material-ui/core';
import { typography } from '@material-ui/system';


const Header = () => {
    return (
        <div>
        <Typography variant="h2" component="h2" align="center" fontStyle="italic" >
        <i class="fas fa-racquet">&nbsp;</i>Tennis Court Locator &nbsp;<i class="fas fa-tennis-ball"></i>
        </Typography>
        </div>
    )
}

export default Header
