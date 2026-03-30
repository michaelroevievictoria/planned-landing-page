import Footer from '@/components/Layout/Footer';
import TermsOfService from '@/components/Layout/Footer/TermsOfPolicy';
import HeaderMenuv2 from '@/components/Layout/HeaderMenuv2';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <>
            <HeaderMenuv2 />
            <TermsOfService />
            <Footer />
        </>

    )
}

export default PrivacyPolicyPage;