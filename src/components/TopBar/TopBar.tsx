import {
	TopBarBox,
	Title,
	SubText,
	TextContainer,
} from '@components/TopBar/TopBarstyle';

type TopBarProps = {
	text: string;
	title: string;
	modal?: string;
};
const TopBar = ({ title, text, modal }: TopBarProps) => {
	return (
		<>
			<TopBarBox modal={modal}>
				<TextContainer>
					<Title>{title}</Title>
					<SubText>{text}</SubText>
				</TextContainer>
			</TopBarBox>
		</>
	);
};

export default TopBar;
