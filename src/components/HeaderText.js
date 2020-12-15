import React from 'react';
import { Text } from "@ui-kitten/components";
import * as FontConfig from './styles/FontConfig';

const HeaderText = ({ title, subtitle }) => {
    return (
        <>
            <Text category="h2" status='primary' style={{ fontSize: FontConfig.actuatedNormalize(24), marginBottom: 4, marginTop: 12, fontWeight: "bold", color: "#2E3092"}}>{title}</Text>
            <Text category="h6" style={{ fontSize: FontConfig.actuatedNormalize(14),fontWeight: "bold", marginBottom: 12 }}>{subtitle}</Text>
        </>
    )
}

export default HeaderText;