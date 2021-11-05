import React from "react";

import {
    FooterDiv,
    FoorterInfoItem,
    BottomStyledSpan,
    FooterSocialPanel
} from '../UtilComponents/Utils'
import StatsIcon from '../assets/socials/stats.svg'
import DiscourseIcon from '../assets/socials/discourse.svg'
import DiscordIcon from '../assets/socials/discord.svg'
import MediumIcon from '../assets/socials/medium.svg'
import TwitterIcon from '../assets/socials/twitter.svg'
import TelegramIcon from '../assets/socials/telegram.svg'
import GithubIcon from '../assets/socials/github.svg'

const FooterSocialLink = ({link, icon}) => {
    return (
        <>
            <a href={link}>
                <img src={icon} alt={link} />
            </a>
        </>
    )
}

const Footer = () =>{
    return(
        <FooterDiv>
            <div>
                <FoorterInfoItem>
                    <span>Donations address:</span>
                    <BottomStyledSpan>
                        <a href="https://etherscan.io/address/0xDD4c48C0B24039969fC16D1cdF626eaB821d3384">0xDD4c48C0B24039969fC16D1cdF626eaB821d3384</a>
                    </BottomStyledSpan>
                    </FoorterInfoItem>
                <FoorterInfoItem>
                    <span>Blackhole.cash version:</span>
                    <BottomStyledSpan>
                    <div>763bcfb</div>
                    </BottomStyledSpan>
                </FoorterInfoItem>
            </div>
            <FooterSocialPanel>
                <FooterSocialLink link="https://explore.duneanalytics.com/public/dashboards/UEU02CHiGtNw9crfeD6OJ7bKPnvFtNjOgZ7Vc6uj" icon={StatsIcon} />
                <FooterSocialLink link="https://torn.community/" icon={DiscourseIcon} />
                <FooterSocialLink link="https://discord.com/invite/TFDrM8K42j" icon={DiscordIcon} />
                <FooterSocialLink link="https://tornado-cash.medium.com/" icon={MediumIcon} />
                <FooterSocialLink link="https://twitter.com/TornadoCash" icon={TwitterIcon} />
                <FooterSocialLink link="https://t.me/TornadoCashOfficial" icon={TelegramIcon} />
                <FooterSocialLink link="https://github.com/tornadocash" icon={GithubIcon} />
            </FooterSocialPanel>
        </FooterDiv>
    )
}
export default Footer