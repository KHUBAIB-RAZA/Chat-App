import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'
import React, { useContext, useState, useEffect } from 'react'
import { ChatContext } from '../../context/ChatContext'

const HomePage = () => {
    const { selectedUser } = useContext(ChatContext);
    const [showRightSidebar, setShowRightSidebar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Device detection
    useEffect(() => {
        const checkDeviceType = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        
        // Handle orientation change (mobile)
        window.addEventListener('orientationchange', () => {
            setTimeout(checkDeviceType, 100);
        });

        return () => {
            window.removeEventListener('resize', checkDeviceType);
            window.removeEventListener('orientationchange', checkDeviceType);
        };
    }, []);

    // Reset sidebar state when switching between devices
    useEffect(() => {
        if (!isMobile) {
            setShowRightSidebar(false);
        }
    }, [isMobile]);

    return (
        <div className='w-full min-h-screen mobile-height px-2 py-2 sm:px-[5%] lg:px-[15%] sm:py-[2%] lg:py-[5%]'>
            <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[calc(100vh-1rem)] sm:h-[calc(100vh-4%)] lg:h-[calc(100vh-10%)] flex relative'>
                
                {/* Mobile Layout (< 768px) */}
                {isMobile && (
                    <>
                        <div className={`w-full ${!selectedUser && !showRightSidebar ? 'block' : 'hidden'}`}>
                            <Sidebar />
                        </div>
                        
                        <div className={`w-full ${selectedUser && !showRightSidebar ? 'block' : 'hidden'}`}>
                            <ChatContainer onShowRightSidebar={() => setShowRightSidebar(true)} />
                        </div>
                        
                        <div className={`w-full ${showRightSidebar ? 'block' : 'hidden'}`}>
                            <RightSidebar onHideRightSidebar={() => setShowRightSidebar(false)} />
                        </div>
                    </>
                )}

                {/* Tablet Layout (768px - 1024px) */}
                {isTablet && (
                    <div className='grid grid-cols-[280px_1fr] w-full h-full'>
                        <Sidebar />
                        <div className='flex flex-col'>
                            <ChatContainer onShowRightSidebar={() => setShowRightSidebar(true)} />
                            {showRightSidebar && selectedUser && (
                                <div className='absolute top-0 right-0 w-80 h-full z-10 bg-black/20 backdrop-blur-sm'>
                                    <div className='w-full h-full bg-[#8185B2]/10'>
                                        <RightSidebar onHideRightSidebar={() => setShowRightSidebar(false)} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Desktop Layout (> 1024px) */}
                {!isMobile && !isTablet && (
                    <div className={`grid w-full h-full ${
                        selectedUser 
                            ? 'grid-cols-[320px_1fr_300px]' 
                            : 'grid-cols-[320px_1fr]'
                    }`}>
                        <Sidebar />
                        <ChatContainer />
                        {selectedUser && <RightSidebar />}
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomePage
