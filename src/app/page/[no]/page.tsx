import Posts from 'components/PostCard';
import { HomeASides } from 'components/ASides';
import { HomeRightSide } from 'components/RightSide';
import { notFound } from 'next/navigation';

export default function Page({ params }: { params: { no: number } }) {
    try {
        return (
            <div id="main-container">
                <Posts page={params.no} />
                <HomeASides />
                <HomeRightSide />
            </div>
        );
    }
    catch (e) {
        return notFound();
    }
}