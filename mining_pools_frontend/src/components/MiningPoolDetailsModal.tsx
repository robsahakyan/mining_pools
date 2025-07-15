import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  CircularProgress,
  Alert,
} from '@mui/material';
import { MiningPoolDetails } from '../types/mining-pools';

interface MiningPoolDetailsModalProps {
  open: boolean;
  onClose: () => void;
  pool: MiningPoolDetails | null;
  loading: boolean;
  error: string | null;
}

const getStatusColor = (status: string): 'success' | 'warning' | 'error' => {
  switch (status) {
    case 'online':
      return 'success';
    case 'degraded':
      return 'warning';
    case 'offline':
      return 'error';
    default:
      return 'success';
  }
};

const MiningPoolDetailsModal: React.FC<MiningPoolDetailsModalProps> = ({
  open,
  onClose,
  pool,
  loading,
  error,
}) => {
  const renderContent = () => {
    if (loading) {
      return (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      );
    }

    if (error) {
      return (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      );
    }

    if (!pool) {
      return (
        <Alert severity="info" sx={{ mb: 2 }}>
          Данные о пуле не найдены
        </Alert>
      );
    }

    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              {pool.name}
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Typography variant="body2" color="text.secondary">
                Статус:
              </Typography>
              <Chip
                label={pool.status}
                color={getStatusColor(pool.status)}
                variant="filled"
              />
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Хешрейт
            </Typography>
            <Typography variant="h6">
              {pool.hashrateTHs.toFixed(1)} TH/s
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Активные воркеры
            </Typography>
            <Typography variant="h6">
              {pool.activeWorkers.toLocaleString()}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Reject Rate
            </Typography>
            <Typography variant="h6">
              {(pool.rejectRate * 100).toFixed(2)}%
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Uptime
            </Typography>
            <Typography variant="h6">
              {pool.uptimePercent.toFixed(2)}%
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Доход за 24ч
            </Typography>
            <Typography variant="h6">
              {pool.last24hRevenueBTC.toFixed(6)} BTC
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle2" color="text.secondary">
              Комиссия пула
            </Typography>
            <Typography variant="h6">
              {pool.feePercent.toFixed(2)}%
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle2" color="text.secondary">
              Местоположение
            </Typography>
            <Typography variant="h6">
              {pool.location}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Детали майнинг-пула
      </DialogTitle>
      <DialogContent>
        {renderContent()}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MiningPoolDetailsModal; 