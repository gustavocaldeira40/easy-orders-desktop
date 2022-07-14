import React from 'react'
import Modal from 'react-modal'
import ButtonComponent from 'components/Button'
import {
    ContainerButtons,
    ContainerContent,
    ContainerTextModal,
    ContainerTitleModal,
    TextModal,
    TitleModal,
} from './style'

interface ModalProps {
    visible: boolean
    handleOk: () => void
    handleCancel: () => void
}

const { innerWidth } = window

const ModalComponent: React.FC<ModalProps> = ({
    handleCancel,
    handleOk,
    visible,
}) => {
    return (
        <Modal
            style={{
                content: {
                    backgroundColor: '#000000',
                    borderRadius: 20,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',

                    boxShadow: '0px 1px 5px 6px #252525',
                    width: `50%`,
                    height: '30%',
                    top: '30%',
                    left: '25%',
                    border: 'none',
                },
                overlay: {
                    backgroundColor: '#00000055',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
            isOpen={visible}
            onRequestClose={handleCancel}
        >
            <ContainerContent>
                <ContainerTitleModal>
                    <TitleModal>Alert</TitleModal>
                    <TextModal auto isWhite onClick={handleCancel}>
                        Fechar
                    </TextModal>
                </ContainerTitleModal>
                <ContainerTextModal>
                    <TextModal>Are you sure you want to remove ?</TextModal>
                </ContainerTextModal>
            </ContainerContent>
            <ContainerButtons>
                <ButtonComponent outlined onClick={() => handleCancel()}>
                    Not
                </ButtonComponent>
                <ButtonComponent onClick={() => handleOk()}>
                    Yes
                </ButtonComponent>
            </ContainerButtons>
        </Modal>
    )
}

export default ModalComponent
