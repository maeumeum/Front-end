import { SuggestStatusSelectorProps } from '@src/types/cardType';
import { SelectContainer } from '@components/Card/Card.ts';
import Selector from '@components/Selector/Selector.tsx';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import { patch } from '@api/api';

function SuggestStatusSelector({
	isPastEndDate,
	selectedStatus,
	volunId,
}: SuggestStatusSelectorProps) {
	const handleRecruitmentStatusChange = async (selectedValue: string) => {
		const result = await Swal.fire(
			alertData.doubleCheckMessage('봉사활동 상태를 변경하시겠습니까??'),
		);

		if (result.isConfirmed) {
			try {
				await patch(`/api/volunteers/registerations/${volunId}`, {
					statusName: selectedValue,
				});
			} catch (error) {
				await Swal.fire(
					alertData.errorMessage('모집상태 변경에 실패하였습니다 :('),
				);
			}
			await Swal.fire(
				alertData.successMessage(
					`${selectedValue} (으)로 상태가 변경되었습니다`,
				),
			);
		}
	};

	return (
		<>
			<SelectContainer>
				<Selector
					value={selectedStatus}
					onChange={handleRecruitmentStatusChange}
					disabled={isPastEndDate}
					options={[
						{ value: '모집중', label: '모집중' },
						{ value: '모집완료', label: '모집완료' },
						{ value: '모집중단', label: '모집중단' },
					]}
				/>
			</SelectContainer>
		</>
	);
}

export default SuggestStatusSelector;
