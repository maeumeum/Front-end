import animalImage from '@assets/images/target/animal.webp';
import childImage from '@assets/images/target/child.webp';
import collegeImage from '@assets/images/target/college-student.webp';
import disabledImage from '@assets/images/target/Disabled.webp';
import farmingImage from '@assets/images/target/farming-and-fishing-village1.webp';
import multiculturalImage from '@assets/images/target/multicultural-family.webp';
import oldPeopleImage from '@assets/images/target/old-man.webp';
import overseaImage from '@assets/images/target/Overseas-Volunteer2.webp';
import womenImage from '@assets/images/target/women2.webp';

import beautyImage from '@assets/images/subject/beauty2.webp';
import bloodImage from '@assets/images/subject/blood-donation.webp';
import briquetImage from '@assets/images/subject/briquet.webp';
import campaignImage from '@assets/images/subject/campaign2.webp';
import digitalImage from '@assets/images/subject/digital.webp';
import educationImage from '@assets/images/subject/education.webp';
import eventImage from '@assets/images/subject/event.webp';
import floggingImage from '@assets/images/subject/flogging.webp';
import forestFireImage from '@assets/images/subject/forest-fire.webp';
import libraryImage from '@assets/images/subject/library.webp';
import talentImage from '@assets/images/subject/talent-donation.webp';

const images = {
	animal: animalImage,
	child: childImage,
	college: collegeImage,
	disabled: disabledImage,
	farming: farmingImage,
	multicultural: multiculturalImage,
	oldPeople: oldPeopleImage,
	oversea: overseaImage,
	women: womenImage,
};

const subjectImages = {
	beauty: beautyImage,
	blood: bloodImage,
	briquet: briquetImage,
	campaign: campaignImage,
	digital: digitalImage,
	education: educationImage,
	event: eventImage,
	flogging: floggingImage,
	forestFire: forestFireImage,
	library: libraryImage,
	talent: talentImage,
};

export const targetKeyword = [
	{
		target: '아동/청소년',
		image: `${images.child}`,
	},
	{
		target: '대학생',
		image: `${images.college}`,
	},
	{
		target: '장애인',
		image: `${images.disabled}`,
	},
	{
		target: '농어촌',
		image: `${images.farming}`,
	},
	{
		target: '동물',
		image: `${images.animal}`,
	},
	{
		target: '노인',
		image: `${images.oldPeople}`,
	},
	{
		target: '해외',
		image: `${images.oversea}`,
	},
	{
		target: '다문화',
		image: `${images.multicultural}`,
	},
	{
		target: '여성',
		image: `${images.women}`,
	},
];

export const subjectKeyword = [
	{
		target: '교육',
		image: `${subjectImages.education}`,
	},
	{
		target: '미용',
		image: `${subjectImages.beauty}`,
	},
	{
		target: '산불',
		image: `${subjectImages.forestFire}`,
	},
	{
		target: '도서관',
		image: `${subjectImages.library}`,
	},
	{
		target: '플로깅',
		image: `${subjectImages.flogging}`,
	},
	{
		target: '재능기부',
		image: `${subjectImages.talent}`,
	},
	{
		target: '행사',
		image: `${subjectImages.event}`,
	},
	{
		target: '헌혈',
		image: `${subjectImages.blood}`,
	},
	{
		target: '연탄',
		image: `${subjectImages.briquet}`,
	},
	{
		target: '디지털',
		image: `${subjectImages.digital}`,
	},
	{
		target: '캠페인',
		image: `${subjectImages.campaign}`,
	},
];
