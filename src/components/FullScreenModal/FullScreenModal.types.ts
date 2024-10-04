export type ModalCloseReason = 'SUBMIT' | 'CLOSE' | 'CANCEL' | 'BACKDROP_CLICK';

export interface FullScreenModalProps {
  title: string;
  opened: boolean;
  onClose: (reason?: ModalCloseReason) => void;
}
