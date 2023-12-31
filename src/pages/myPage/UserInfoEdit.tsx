import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import MyPageUserForm from '@components/UserForm/MyPageUserForm';

function UserInfoEdit() {
	const tabs = [TabTypes.EDIT_MYINFO];

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>

			<Main>
				<TabMenu>
					<Tab tabs={tabs} />
				</TabMenu>
				<MyPageUserForm pageType={TabTypes.EDIT_MYINFO} />
			</Main>
		</Container>
	);
}

export default UserInfoEdit;
