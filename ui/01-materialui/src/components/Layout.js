import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import { ManualMenu } from "./Sidemenu"
import { Content } from './Content'

export class UserManualLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    title: "Introduction to Value Cockpit",
                    submenu: [
                        {
                            title: "Introduction",
                        },
                        {
                            title: "Offering",
                        },
                        {
                            title: "Opputunity",
                        },
                        {
                            title: "Project",
                        }
                    ]
                },
            
            ]
        }
    }
    render() {
        return (
            <Grid container >
                <Grid item xs={8}>
                    <Content></Content>
                </Grid>
                <Grid item xs={4}>
                    <ManualMenu menu={this.state.menu}></ManualMenu>
                </Grid>
            </Grid>
        );
    }
}

