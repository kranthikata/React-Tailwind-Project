import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import PurposeCard from '../components/PurposeCard';
import Button from '../components/Button';
import ShareMyWorkImage from '../assets/images/ShareMyWork.png';
import HireDesignerImage from '../assets/images/hiringDesigner.png';
import DesignInspirationImage from '../assets/images/designInspiration.png';

const SelectPurpose = () => {
    const [checkedCards, setCheckedCards] = useState([]); // State to track checked cards
    const navigate = useNavigate();

    // Function to handle checkbox change in PurposeCard
    const handleCheckboxChange = (id) => {
        // Toggle checked state for the card with the given id
        setCheckedCards(prevCheckedCards => {
            if (prevCheckedCards.includes(id)) {
                return prevCheckedCards.filter(cardId => cardId !== id);
            } else {
                return [...prevCheckedCards, id];
            }
        });
    };

    const handleButtonClick = () => {
        navigate('/verifyemail');
    };

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 pb-8">
                <div className="max-w-5xl mx-auto bg-white rounded-lg overflow-hidden text-center">
                    <h1 className="text-3xl font-bold text-black mb-4">What brings you to Dribbble?</h1>
                    <p className="text-sm text-gray-500 mb-6">Select the options that best describe you. Don't worry, you can explore other options later.</p>
                        <div className="flex justify-center flex-wrap md:flex-nowrap">
                            <PurposeCard
                                id="share-work-card"
                                title="I'm a designer looking to share my work"
                                description="Work Sharing. Inspirational designs, illustrations, and graphic elements from the world's best designers."
                                image={ShareMyWorkImage}
                                widht="80"
                                onChange={() => handleCheckboxChange('share-work-card')} // Add onChange handler to each checkbox
                                isChecked={checkedCards.includes('share-work-card')} // Pass isChecked prop
                            />

                            <PurposeCard
                                id="hire-designer-card"
                                title="I'm looking to hire a designer"
                                description="Find the perfect match for your next project using Designer Search, or let designers come to you through our Job Board."
                                image={HireDesignerImage}
                                width="80"
                                onChange={() => handleCheckboxChange('hire-designer-card')} // Add onChange handler to each checkbox
                                isChecked={checkedCards.includes('hire-designer-card')} // Pass isChecked prop
                            />
                            <PurposeCard
                                id="inspiration-card"
                                title="I'm looking for design inspiration"
                                description="With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
                                image={DesignInspirationImage}
                                width="80"
                                onChange={() => handleCheckboxChange('inspiration-card')} // Add onChange handler to each checkbox
                                isChecked={checkedCards.includes('inspiration-card')} // Pass isChecked prop
                            />
                        </div>
                    <p className="text-sm font-bold text-black-500 mt-6 mb-4">Anything else? You can select multiple</p>
                    <Button isFilled={checkedCards.length > 0} onClick={handleButtonClick}>Finish</Button>
                </div>
            </div>
        </div>
    );
};

export default SelectPurpose;
