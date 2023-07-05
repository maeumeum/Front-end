import {
	Container,
	TitleContainer,
	Square,
	Title,
	ImgContainer,
	ContentsContainer,
	Content,
	Image,
} from './ActivityStyle';
import { VolunteerType } from '@src/types/cardType';

interface ActivityIntroProps {
	volunteerData: VolunteerType;
}

// eslint-disable-next-line react/prop-types
const ActivityIntro = ({ volunteerData }: ActivityIntroProps) => {
	const hasPostImage = !!volunteerData.images;

	let formattedContent: string[] = [];
	if (volunteerData.content) {
		formattedContent = volunteerData.content.split('\n');
	}

	return (
		<>
			<Container>
				<TitleContainer>
					<Square></Square>
					<Title>어떤 활동을 하게 되나요?</Title>
				</TitleContainer>

				{hasPostImage && (
					<ImgContainer>
						{volunteerData.images.map((image: string, index: number) => (
							<Image key={index} src={image} alt='content-image' />
						))}
					</ImgContainer>
				)}

				<ContentsContainer>
					<Content>
						{formattedContent.map((line: string, index: number) => {
							return (
								<span key={index}>
									{line}
									<br />
								</span>
							);
						})}
					</Content>
				</ContentsContainer>
			</Container>
		</>
	);
};

export default ActivityIntro;
