{/*
import React from 'react';
import placeholder from "../assets/album_art.jpg"

const CoverArt = () => {
    return (
        <div className="w-full max-h-[70%] bg-gray-200 flex items-center justify-center aspect-square mb-4">
            <img
                src={placeholder}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;
*/}
import React from 'react';

{/*
// Type define different song parameters
interface SongData {
    id: string;
    title: string;
    artist: string;
    genre: string;
    duration: number;
    cover: string;
    song: string;
}
    */}

// Type define prop for CoverArt (songID to fetch art)
interface CoverArtProps {
    coverUrl: string;
}

const CoverArt: React.FC<CoverArtProps> = ({ coverUrl }) => {
    return (
        <div className="w-full max-h-[70%] bg-gray-200 flex items-center justify-center aspect-square mb-4">
            <img
                src={coverUrl || '/assets/placeholder.svg'}
                alt="Album Cover"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;

/*
const CoverArt: React.FC<CoverArtProps> = ({ songId }) => {
    const [coverArt, setCoverArt] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null); // Can either be string or null depending on existence of error

    useEffect(() => {
        const fetchCoverArt = async() => {
            try {
                const response = await fetch(`/api/v1/songs/${songId}.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch song data');
                }

                const data: SongData = await response.json();
                setCoverArt(data.cover);
            } catch (err) {
                setError('Error fetching album cover art');
            } finally {
                setLoading(false);
            }
        };

        fetchCoverArt();
    }, [songId]);

    if (loading) return <div className="text-gray-400">Loading cover art...</div>;
    if (error) return <div className="text-red-700">{error}</div>;

    return (
        <div className="w-full max-h-[70%] bg-gray-200 flex items-center justify-center aspect-square mb-4">
            <img
                src={coverArt}
                alt="Album Cover"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default CoverArt;
*/