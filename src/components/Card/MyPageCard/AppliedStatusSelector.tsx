import { useState } from 'react';
import { AppliedStatusSelectorProps } from '@src/types/cardType';
import Selector from '@components/Selector/Selector.tsx';
import { SelectContainer } from '@components/Card/Card.ts';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import { post, del } from '@api/api';

function AppliedStatusSelector({
	volunId,
	volunApplyId,
}: AppliedStatusSelectorProps) {
	const [selectedParticipationStatus, setSelectedParticipationStatus] =
		useState<string>('');

	const handleParticipationStatusChange = async (selectedValue: string) => {
		try {
			if (selectedValue === 'complete') {
				const result = await Swal.fire(
					alertData.doubleCheckTitkeMsg(
						'참여하신 활동이 맞으십니까?',
						'커뮤니티 경험 향상을 위해 거짓 정보는 지양해주세요!',
					),
				);
				if (result.isConfirmed) {
					await post(`/api/review/users/participation/${volunId}`, {});
					setSelectedParticipationStatus(selectedValue);
					window.location.reload();
					await Swal.fire('완료된 봉사로 변경되었습니다!', 'success');
				}
			} else if (selectedValue === 'cancel') {
				const result = await Swal.fire(
					alertData.doubleCheckMessage('봉사활동을 취소하시겠습니까?'),
				);
				if (result.isConfirmed) {
					await del(`/api/applications/${volunApplyId}`, {
						data: { volunteer_id: volunId },
					});

					setSelectedParticipationStatus('');

					await Swal.fire(
						alertData.successMessage('봉사활동이 취소되었습니다'),
					);
					window.location.reload();
				}
			}
		} catch (error) {
			console.log(error);
			await Swal.fire(
				alertData.errorMessage('활동이 시작되지 않은 봉사입니다.'),
			);
		}
	};

	return (
		<>
			<SelectContainer>
				<Selector
					value={selectedParticipationStatus}
					onChange={handleParticipationStatusChange}
					options={[
						{ value: '상태변경', label: '상태변경' },
						{ value: 'complete', label: '참여완료' },
						{ value: 'cancel', label: '신청취소' },
					]}
				/>
			</SelectContainer>
		</>
	);
}

export default AppliedStatusSelector;
