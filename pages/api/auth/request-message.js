import Moralis from 'moralis';

const config = {
    domain: 'auth.app',
    statement: 'Web Login.',
    uri: 'https://localhost:3000',
    timeout: 120,
};

export default async function handler(req, res) {
    const { address, chain, network } = req.body;
    MORALIS_API_KEY='Chls3GxNualnNcfoaKHIWDlxTotOfI0zcnnGBKpnAiAdkGMq7PT84FF6qr4VXb7J'

    await Moralis.start({ apiKey: MORALIS_API_KEY });

    try {
        const message = await Moralis.Auth.requestMessage({
            address,
            chain,
            network,
            ...config,
        });

        res.status(200).json(message);
    } catch (error) {
        res.status(400).json({ error });
        console.error(error);
    }
}