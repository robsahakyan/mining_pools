import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Box, Typography, Container, Paper, IconButton, Tooltip } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { dispatch } from '../redux/hooks';
import {
  selectMiningPools,
  selectSelectedPool,
  selectMiningPoolsLoading,
  selectMiningPoolsError,
  clearSelectedPool,
} from '../redux/mining-pools';
import { fetchMiningPoolsThunk, fetchMiningPoolDetailsThunk } from '../redux/mining-pools/thunk';
import MiningPoolsTable from '../components/MiningPoolsTable';
import MiningPoolDetailsModal from '../components/MiningPoolDetailsModal';

const MiningPoolsDashboard: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPoolId, setSelectedPoolId] = useState<string | null>(null);
  
  const pools = useSelector(selectMiningPools);
  const selectedPool = useSelector(selectSelectedPool);
  const loading = useSelector(selectMiningPoolsLoading);
  const error = useSelector(selectMiningPoolsError);

  useEffect(() => {
    // Загружаем данные при монтировании компонента
    dispatch(fetchMiningPoolsThunk());
  }, []);

  const handleViewDetails = (poolId: string) => {
    setSelectedPoolId(poolId);
    setModalOpen(true);
    dispatch(fetchMiningPoolDetailsThunk(poolId));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPoolId(null);
    dispatch(clearSelectedPool());
  };

  const handleRefresh = () => {
    dispatch(fetchMiningPoolsThunk());
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" component="h1">
            Дэшборд майнинг-пулов
          </Typography>
          <Tooltip title="Обновить данные">
            <IconButton onClick={handleRefresh}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Мониторинг статистики майнинг-пулов в реальном времени
        </Typography>
      </Box>

      <Paper elevation={2} sx={{ p: 2 }}>
        <MiningPoolsTable
          pools={pools}
          loading={loading}
          error={error}
          onViewDetails={handleViewDetails}
        />
      </Paper>

      <MiningPoolDetailsModal
        open={modalOpen}
        onClose={handleCloseModal}
        pool={selectedPool}
        loading={loading && selectedPoolId !== null}
        error={error}
      />
    </Container>
  );
};

// Отключаем авторизацию для этой страницы
(MiningPoolsDashboard as any).authGuard = false;

export default MiningPoolsDashboard; 