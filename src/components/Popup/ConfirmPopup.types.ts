import type { ReactNode } from 'react';

export type ConfirmPopupVariant = 'default' | 'danger';
export type ConfirmPopupInitialFocus = 'cancel' | 'confirm';

export type ConfirmPopupProps = {
  open: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmPopupVariant;
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  cancelDisabled?: boolean;
  closeOnEscape?: boolean;
  closeOnBackdropClick?: boolean;
  initialFocus?: ConfirmPopupInitialFocus;
  onConfirm: () => void;
  onCancel: () => void;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};
