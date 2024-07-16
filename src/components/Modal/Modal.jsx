import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Divider,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

import MainButton from 'components/Button/MainButton';
import LogoSmall from 'components/Logo/SmallLogo';
import GrayBar from 'components/GrayBar/GrayBar';
import Loader from 'components/Loader/Loader';

import {
  getDailyRate,
  getIsLoading,
} from '../../redux/dailyRate/dailyRateSelectors';

// Import or define TopGradient and BottomGradient components here if needed

const ModalWindow = ({ isOpen, onClose }) => {
  const dailyRate = useSelector(getDailyRate);
  const isLoading = useSelector(getIsLoading);
  const navigate = useNavigate();

  const handleClick = () => {
    if (dailyRate === null) {
      console.error('Daily rate is null');
      return;
    }

    navigate('/registration');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={true}
      size={{ xs: 'full', md: '2xl' }}
    >
      <ModalContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="20px"
        >
          <LogoSmall />
          <Box display={{ md: 'none' }}>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              fontSize="14px"
              as={NavLink}
              to="/login"
              mr="16px"
            >
              SIGN IN
            </Link>
            <Link
              _hover={{ textDecor: 'none' }}
              fontFamily="-moz-initial"
              fontSize="14px"
              as={NavLink}
              to="/registration"
            >
              REGISTRATION
            </Link>
          </Box>
        </Box>
        {isOpen && <GrayBar onClick={onClose} />}
        <Box maxW="409px" mx="auto">
          <ModalHeader fontSize="26px" textAlign="center">
            Join us to see your recommended daily calorie intake!
          </ModalHeader>
        </Box>
        <ModalBody h="100%">
          <Box minH="279px">
            {isLoading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minH="279px"
                w="100%"
              >
                <Loader height={20} width={20} />
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Text
                  as="b"
                  fontSize="24px"
                  display="flex"
                  alignItems="baseline"
                  justifyContent="center"
                  color="#264061"
                  textAlign="center"
                  mb="20px"
                >
                  Register now to find out the number of calories you need to
                  lose weight and to see the foods you should avoid!
                </Text>
                <Divider w={{ xs: 'none', md: '330px' }} mx="auto" />
              </Box>
            )}
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center" mb="81px">
          <MainButton text="Start losing weight" onClick={handleClick} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindow;
