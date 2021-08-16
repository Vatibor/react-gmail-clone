import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
    const history = useHistory();

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <div className="emailRow__title">{title}</div>

            <div className="emailRow__message">
                <h4>
                    {subject}{"  "}
                    <span className="emailRow__description">- {description}</span>    
                </h4>
                
            </div>
            <div className="emailRow__time">{time}</div>
        </div>
    )
}

export default EmailRow
