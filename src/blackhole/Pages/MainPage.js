import React, { useState, useEffect } from "react"
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import publicIp from "public-ip"
import {
	Row,
	PanelContent,
	PanelContentItem,
	PanelContentSmallTitle,
	PanelContentSmallContent,
	PanelContentSmallContentRow,
	PanelContentSmallContentCol,
	DepositesDetailItem,
	DepositesDetailItemIndex,
	DepositesDetailItemContent,
	InfoSpan,
	InfoSpan2,
	StyledButton,
	StyledInput,
	TabNavPart,
	TabNavItemLeft,
	TabNavItemRight,
	TabContentPart,
	TabBottomPart,
	TabBottomNavPart,
	BottomStyledSpan,
	Notification,
	Text,
	CopyButton,
	FlexLayout,
	FilterItem,
	ListItemText
} from '../UtilComponents/Utils'
import {
	Article,
	ArticleContent,
	ArticleLeft,
	ArticleText,
	MainPageContent,
	MainPageContentItemDiv,
	useCheckMobile
} from '../UtilComponents/MainPageContent'

import DropDownMenu from '../UIUtils/Dropdown'
import StepLine from '../UIUtils/StepLine'
import DepositModal from '../Component/DepositModal'
import WithdrawModal from '../Component/WithdrawModal'

import { ConnectModalDispatchContext } from '../ContextProviders/ConnectModalProvider'
import CloseIcon from '../assets/icons/close-icon.svg'
import SettingIcon from '../assets/icons/setting.png'
import SaveIcon from '../assets/icons/save.png'
import ToolIcon from '../assets/icons/tool.png'
import DeleteIcon from '../assets/icons/delete.png'


const TokenList = [
	{ name: 'ETH', val: 'ETH' },
	{ name: 'DAI', val: 'DAI' },
	{ name: 'cDAI', val: 'cDAI' },
	{ name: 'USDC', val: 'USDC' },
	{ name: 'USDT', val: 'USDT' }
]
const AmountList = {
	'ETH': [
		{ name: 0.1, isEnable: true },
		{ name: 1, isEnable: true },
		{ name: 10, isEnable: true },
		{ name: 100, isEnable: true }
	],
	'DAI': [
		{ name: 100, isEnable: true },
		{ name: 1000, isEnable: true },
		{ name: 10000, isEnable: false },
		{ name: 100000, isEnable: false }
	],
	'cDAI': [
		{ name: 5000, isEnable: true },
		{ name: 50000, isEnable: true },
		{ name: 500000, isEnable: false },
		{ name: 5000000, isEnable: false }
	],
	'USDC': [
		{ name: 100, isEnable: true },
		{ name: 1000, isEnable: true },
		{ name: 10000, isEnable: false },
		{ name: 100000, isEnable: false }
	],
	'USDT': [
		{ name: 100, isEnable: true },
		{ name: 1000, isEnable: true },
		{ name: 10000, isEnable: false },
		{ name: 100000, isEnable: false }
	],
};
const contextList = [
	{ text: 'Total', amount: '' },
	{ text: 'Gas Price', amount: '130 Gwei' },
	{ text: 'Network fee', amount: '0.065 ETH' },
	{ text: 'Relayer fee', amount: '0.00 ETH' },
	{ text: 'Total fee', amount: '0.05 ETH' },
	{ text: 'Tokens to receive', amount: '0.04 ETH' }
];
const contextNoteList = [
	{ text: 'Amount', amount: '0.1 ETH' },
	{ text: 'Time passed', amount: 'a minute' },
	{ text: 'Subsequent deposits', amount: 'no deposits' }
];
const historyList = [
	{ time: 'a few seconds ago', amount: '0.1 ETH', deposits: "deposit", hash: "0xdf9392d83325fe228388a38e8334", status: "Waiting for receipt", rewards: "164.08K AP" }
];
const note = "tornado-eth-0.1-1-0x73042cd217fa07334cc60547ae4327ad511d1bea648ba669750ff7d1d6c3aed628d48eb4ac834160df2d6f37274084d190191da9d45e9423db24ec2b3873";
const MainPageContentItem = ({ HasOutLine, MultiTab, FirstTab, SecondTab, Contents, BottomNav, IsBottomRight, selTab, setSelTab }) => {

	return (
		<MainPageContentItemDiv>
			<TabNavPart>
				<TabNavItemLeft Select={selTab === 0 && MultiTab} MultiTab={MultiTab} HasOutLine={HasOutLine} onClick={
					() => {
						if (MultiTab) {
							setSelTab(0)
						}

					}}>
					{FirstTab}
				</TabNavItemLeft>
				{SecondTab && (
					<TabNavItemRight Select={selTab === 1 && MultiTab} MultiTab={MultiTab} HasOutLine={HasOutLine} onClick={
						() => {
							if (MultiTab) {
								setSelTab(1)
							}
						}}>
						{SecondTab}
					</TabNavItemRight>
				)}

			</TabNavPart>
			<TabContentPart HasOutLine={HasOutLine} IsBottomRight={IsBottomRight}>
				{Contents[selTab]}
			</TabContentPart>
			<TabBottomPart IsBottomRight={IsBottomRight}>
				<TabBottomNavPart IsBottomRight={IsBottomRight} HasOutLine={HasOutLine}>
					{BottomNav}
				</TabBottomNavPart>

			</TabBottomPart>
		</MainPageContentItemDiv>
	)
}
const truevalue = true

const MainPage = () => {
	const setConnectModalShow = React.useContext(ConnectModalDispatchContext)
	const { account } = useWeb3React()
	const [curCoin, setCurCoin] = useState(TokenList[0])
	const [curTab, setCurTab] = useState(0)
	const [curAmountIndex, setCurAmountIndex] = useState(0)
	const [ip, setIP] = useState('')
	const [showDepositModal, setShowDepositModal] = useState(false)
	const [showWithdrawModal, setShowWithdrawModal] = useState(false)
	const [showNotification, setShowNotification] = useState(false)
	const [inputNote, setInputNote] = useState(note)
	const [inputAddress, setInputAddress] = useState('')
	const [histories, setHistories] = useState(historyList)
	const isMobile = useCheckMobile();

	useEffect(() => {
		if (Array.isArray(TokenList)) {
			setCurCoin(TokenList[0])
		}
		setCurTab(0)
	}, [])

	useEffect(() => {
		setCurAmountIndex(0)
	}, [curCoin])

	publicIp.v4().then(result => {
		setIP(result)
	});

	const Deposit = async () => {
		/*
		const web3 = window.web3;
		console.log(web3)
		const accounts = await web3.eth.getAccounts();
		console.log(accounts)
		*/
		console.log(window.ethereum)
		const web3 = new Web3(window.ethereum)
		console.log(web3)
		const accounts = await web3.eth.getAccounts()
		console.log(accounts)
		const remainbalance = await web3.eth.getBalance(accounts[0])
		console.log(remainbalance)

		//    if (remainbalance > AmountList[curCoin.name][curAmountIndex]) {
		const link = document.createElement('a');
		link.href = 'note.txt';
		link.setAttribute('download', 'note.txt');
		document.body.appendChild(link);
		link.click();
		setShowDepositModal(true);
		//    }
	}

	const sendDeposit = () => {
		setShowDepositModal(false);
		setShowNotification(true);
		setTimeout(() => {
			setShowNotification(false);
			setHistories(historyList.push({ time: 'a few seconds ago', amount: '0.2 ETH', deposits: "deposit", hash: "0xdf9392d83325fe228388a38e8334", status: "Waiting for receipt", rewards: "-" }));
		}, 5000);
	}

	const handleWithdraw = () => {
		setShowNotification(true);
		setTimeout(() => {
			setShowNotification(false);
		}, 5000);
	}

	const hideNotification = () => {
		setShowNotification(false);
	}

	const ConnectWallet = () => {
		if (account) {
			Deposit()
		} else {
			setConnectModalShow(true)
		}
	}

	return (
		<div>
			{
				showNotification &&
				<Notification>
					<button type="button" onClick={hideNotification} onKeyDown={hideNotification} style={{ padding: "0", border: "0", position: "absolute", right: "10px", cursor: "pointer", backgroundColor: "transparent" }}>
						<img src={CloseIcon} alt="close" style={{ width: "15px" }} />
					</button>
					<div className="loading" />
					<div>
						<Text size="10px">
							Depositing 0.1 ETH
						</Text>
						<Text size="10px" color="green1">
							View on Etherscan
						</Text>
					</div>
				</Notification>
			}
			<Row>
				<Article>
					<ArticleContent>
						<ArticleLeft>
							<span style={{ height: '3rem', width: '3rem' }}>
								.
              </span>
						</ArticleLeft>
						<ArticleText>
							<span>
								Blackhole.cash was audited. However, it is still an experimental software. Please use at your own risk.
              </span>
						</ArticleText>

					</ArticleContent>
				</Article>
				<Article>
					<ArticleContent>
						<ArticleLeft>
							<span style={{ height: '3rem', width: '3rem' }}>
								.
              </span>
						</ArticleLeft>
						<ArticleText>
							<span>
								Blackhole.cash was audited. However, it is still an experimental software. Please use at your own risk.
              </span>
						</ArticleText>

					</ArticleContent>
				</Article>
			</Row>
			<Row>
				<MainPageContent>
					<MainPageContentItem
						selTab={curTab}
						setSelTab={setCurTab}
						HasOutLine={truevalue}
						MultiTab={truevalue}
						FirstTab={
							<span style={{ fontSize: '20px' }}>Deposit</span>
						}
						SecondTab={
							<span style={{ fontSize: '20px' }}>Withdraw</span>
						}
						Contents={
							[
								<PanelContent>
									<PanelContentItem>
										<PanelContentSmallTitle>
											<span>Token</span>
										</PanelContentSmallTitle>
										<PanelContentSmallContent>
											<DropDownMenu list={TokenList} current={curCoin} setCurrent={setCurCoin}>
												.
                      </DropDownMenu>
										</PanelContentSmallContent>
									</PanelContentItem>
									<PanelContentItem>
										<PanelContentSmallTitle>
											<span>Amount</span>
											<InfoSpan>i</InfoSpan>
										</PanelContentSmallTitle>
										<PanelContentSmallContent>
											<StepLine
												stepInfo={AmountList[curCoin.name]}
												selCoin={curCoin}
												selAmount={curAmountIndex}
												setSelAmount={setCurAmountIndex}
											/>
										</PanelContentSmallContent>
									</PanelContentItem>
									<PanelContentItem>
										<StyledButton onClick={ConnectWallet}>
											{!account && (
												<span>Connect</span>
											)}
											{account && (
												<span>Deposit</span>
											)}
										</StyledButton>
									</PanelContentItem>
								</PanelContent>,
								<PanelContent>
									<PanelContentItem>
										<PanelContentSmallTitle>
											<span>Note</span>
											<InfoSpan>i</InfoSpan>
											<CopyButton className="copy-link float-r" onClick={() => setShowWithdrawModal(true)}>
												<img src={SettingIcon} alt="setting" style={{ height: "9px" }} />
											</CopyButton>
											<CopyButton className="copy-link float-r" onClick={() => setShowWithdrawModal(true)}>
												<img src={SaveIcon} alt="save" style={{ height: "9px" }} />
											</CopyButton>
										</PanelContentSmallTitle>
										<PanelContentSmallContent>
											<StyledInput placeholder="Please enter your note" value={inputNote} onChange={(e) => { setInputNote(e.target.value) }} />
											{contextNoteList.map((item, index) => {
												return (
													<FlexLayout justify="space-between" key={`__key-${index.toString()}`}>
														<Text size="12px">
															{item.text}
														</Text>
														<Text size="12px" color="green">
															{item.amount}
														</Text>
													</FlexLayout>
												)
											})}
										</PanelContentSmallContent>
									</PanelContentItem>
									<PanelContentItem>
										<PanelContentSmallTitle>
											<span>Recipient Address</span>
											<InfoSpan>i</InfoSpan>
										</PanelContentSmallTitle>
										<PanelContentSmallContent>
											<StyledInput placeholder="Please paste address here" onChange={(e) => { setInputAddress(e.target.value) }} />
										</PanelContentSmallContent>
									</PanelContentItem>
									{
										inputNote && inputAddress &&
										<PanelContentItem style={{ marginTop: "-1rem", paddingBottom: "0.5rem" }}>
											{contextList.map((item, index) => {
												return (
													<FlexLayout key={`__key-${index.toString()}`} justify="space-between" borderTop={index === contextList.length - 1 ? "1px solid #27AE60" : "0"} margin={index === contextList.length - 1 ? "5px 0 0 0" : "0"}>
														<Text size={item.amount === '' ? "14px" : "12px"}>
															{item.text}
														</Text>
														<Text size="12px" color="green">
															{item.amount}
														</Text>
													</FlexLayout>
												)
											})}
										</PanelContentItem>
									}
									<PanelContentItem>
										<StyledButton onClick={handleWithdraw}>
											<span>Withdraw</span>
										</StyledButton>
									</PanelContentItem>
								</PanelContent>
							]
						}
						BottomNav={
							<BottomStyledSpan>
								<a href="https://etherscan.io/address/0x169AD27A470D064DEDE56a2D3ff727986b15D52B">
									{curCoin.name.toLowerCase()}-{AmountList[curCoin.name][curAmountIndex].name.toString().replace('.', '')}.blackholecash.eth
                </a>
							</BottomStyledSpan>
						}
						IsBottomRight={false}

					/>
					<MainPageContentItem
						selTab={curTab}
						setSelTab={setCurTab}
						HasOutLine={false}
						FirstTab={
							<>
								<span style={{ fontSize: '20px' }}>Statistics</span>
								<InfoSpan2>{AmountList[curCoin.name][curAmountIndex].name}&nbsp;{curCoin.name}</InfoSpan2>
							</>
						}
						BottomNav={
							<BottomStyledSpan>Your Ip&nbsp;:&nbsp;<span>{ip}</span></BottomStyledSpan>
						}
						IsBottomRight={truevalue}
						Contents={
							[<PanelContent>
								<PanelContentItem>
									<PanelContentSmallTitle>
										<span>Anonymity set</span>
										<InfoSpan>i</InfoSpan>
									</PanelContentSmallTitle>
									<PanelContentSmallContent>
										<span>6 equal user deposits</span>
									</PanelContentSmallContent>
								</PanelContentItem>
								<PanelContentItem>
									<PanelContentSmallTitle>
										<span>Latest deposits</span>
									</PanelContentSmallTitle>
									<PanelContentSmallContent>
										<PanelContentSmallContentRow>
											<PanelContentSmallContentCol>
												<DepositesDetailItem hasback={truevalue}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
												<DepositesDetailItem hasback={false}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
												<DepositesDetailItem hasback={truevalue}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
												<DepositesDetailItem hasback={false}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
												<DepositesDetailItem hasback={truevalue}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
											</PanelContentSmallContentCol>
											<PanelContentSmallContentCol>
												<DepositesDetailItem hasback={truevalue}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 10 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
												<DepositesDetailItem hasback={false}>
													<DepositesDetailItemIndex>5.</DepositesDetailItemIndex>
													<DepositesDetailItemContent> 2 months ago</DepositesDetailItemContent>
												</DepositesDetailItem>
											</PanelContentSmallContentCol>

										</PanelContentSmallContentRow>

									</PanelContentSmallContent>
								</PanelContentItem>
							</PanelContent>]
						}
					/>
				</MainPageContent>
				<Row>
					<FlexLayout justify="flex-start" wrap={isMobile ? "wrap" : "nowrap"} width={isMobile ? "100%" : "auto"}>
						{
							!isMobile &&
							<Text size="11px">
								Filter by
							</Text>
						}
						<FlexLayout padding="0 5px" width={isMobile ? "100%" : "auto"} justify={isMobile ? "center" : "flex-start"} borderRight={isMobile ? "0" : "1px solid white"} margin={isMobile ? "20px 0 0 0" : "0"}>
							{TokenList.map((item, index) => {
								return (
									<FilterItem key={`__key-${index.toString()}`} className={index === 0 ? "filter-item-active" : ""}>
										{item.name}
									</FilterItem>
								)
							})}
						</FlexLayout>
						<FlexLayout padding="0 5px" borderRight={isMobile ? "0" : "1px solid white"} margin={isMobile ? "10px 0 0 0" : "0"} width={isMobile ? "100%" : "auto"} justify={isMobile ? "center" : "flex-start"}>
							<FilterItem className="filter-item-active">
								24 hours after deposit
							</FilterItem>
						</FlexLayout>
						<FlexLayout padding="0 5px" margin={isMobile ? "10px 0 0 0" : "0"} width={isMobile ? "100%" : "auto"} justify={isMobile ? "center" : "flex-start"}>
							<FilterItem className="filter-item-active">
								Spent
							</FilterItem>
							<FilterItem className="filter-item-active">
								Unspent
							</FilterItem>
						</FlexLayout>
					</FlexLayout>
					{
						!isMobile &&
						<FlexLayout justify="flex-start" padding="25px 0 20px 0">
							<ListItemText>
								Time passed
							</ListItemText>
							<ListItemText>
								Amount
							</ListItemText>
							<ListItemText>
								Subsequent deposits
							</ListItemText>
							<ListItemText>
								Tx Hash
							</ListItemText>
							<ListItemText>
								Status
							</ListItemText>
							<ListItemText>
								Rewards
							</ListItemText>
						</FlexLayout>
					}
					{historyList.map((item, index) => {
						return (
							<FilterItem key={`__key-${index.toString()}`} padding="18px 0" opacity="1" border="0" backgroundColor="#3a3939" borderRadius="5px" borderLeft="6px solid gray" margin={isMobile ? "10px 0" : "3px"}>
								{
									!isMobile &&
									<>
										<ListItemText>{item.time}</ListItemText>
										<ListItemText>{item.amount}</ListItemText>
										<ListItemText>{item.deposits}</ListItemText>
										<ListItemText color="green">{item.hash}</ListItemText>
										<ListItemText>{item.status}</ListItemText>
										<ListItemText>{item.rewards}</ListItemText>
										<FlexLayout>
											<CopyButton className="copy-link">
												<img src={ToolIcon} alt="tool" style={{ height: "11px" }} />
											</CopyButton>
											<CopyButton className="copy-link">
												<img src={SaveIcon} alt="save" style={{ height: "11px", marginRight: "5px" }} />
										Note
									</CopyButton>
											<CopyButton className="copy-link" onClick={() => { setHistories(historyList.splice(index, 1)) }}>
												<img src={DeleteIcon} alt="delete" style={{ height: "11px" }} />
											</CopyButton>
										</FlexLayout>
									</>
								}
								{
									isMobile &&
									<>
										<ListItemText>Time Passed</ListItemText>
										<ListItemText>Amount</ListItemText>
										<ListItemText>{item.time}</ListItemText>
										<ListItemText>{item.amount}</ListItemText>
										<ListItemText margin="10px 0 0 0">Subsequent deposits</ListItemText>
										<ListItemText margin="10px 0 0 0">Status</ListItemText>
										<ListItemText>{item.deposits}</ListItemText>
										<ListItemText>{item.status}</ListItemText>
										<ListItemText width="100%" margin="10px 0 0 0">Tx Hash</ListItemText>
										<ListItemText color="green" width="100%">{item.hash}</ListItemText>
										<ListItemText width="100%" margin="10px 0 0 0">Rewards</ListItemText>
										<ListItemText width="100%">
											{item.rewards}
											<CopyButton className="copy-link">
												<img src={ToolIcon} alt="tool" style={{ height: "18px" }} />
											</CopyButton></ListItemText>
										<FlexLayout margin="10px 0 0 0" width="100%" justify="flex-start">
											<CopyButton className="copy-link" width="60%">
												<img src={SaveIcon} alt="save" style={{ height: "18px", marginRight: "5px" }} />
												Note
											</CopyButton>
											<CopyButton className="copy-link" onClick={() => { setHistories(historyList.splice(index, 1)) }}>
												<img src={DeleteIcon} alt="delete" style={{ height: "18px" }} />
											</CopyButton>
										</FlexLayout>
									</>
								}
							</FilterItem>
						)
					})}
				</Row>
			</Row>
			{
				showDepositModal &&
				<DepositModal
					isOpen={showDepositModal}
					onDismiss={() => setShowDepositModal(false)}
					sendDeposit={sendDeposit}
				/>
			}
			<WithdrawModal
				isOpen={showWithdrawModal}
				account={account}
				connectWallet={ConnectWallet}
				onDismiss={() => setShowWithdrawModal(false)}
			/>
		</div>
	)
}
export default MainPage