import Header from "../../components/header"
import { useRouter } from 'next/router';
import Card from "../../components/card/card"

const Platinum = () => {

    const router = useRouter();
	const pid = router.query.user;

    console.log(pid)

    return (
        <>
            <Header />
            <section>
                <div className="container">
                    <div className="row">
                        <Card />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Platinum;