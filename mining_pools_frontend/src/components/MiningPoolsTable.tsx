import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { MiningPool } from '../types/mining-pools';

interface MiningPoolsTableProps {
  pools: MiningPool[];
  loading: boolean;
  error: string | null;
  onViewDetails: (id: string) => void;
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

const MiningPoolsTable: React.FC<MiningPoolsTableProps> = ({
  pools,
  loading,
  error,
  onViewDetails,
}) => {
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

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Название пула</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Хешрейт (TH/s)</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Активные воркеры</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="h6">Reject Rate (%)</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Статус</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Действия</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pools.map((pool) => (
            <TableRow key={pool.id} hover>
              <TableCell component="th" scope="row">
                <Typography variant="body1" fontWeight="medium">
                  {pool.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">
                  {pool.hashrateTHs.toFixed(1)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">
                  {pool.activeWorkers.toLocaleString()}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body1">
                  {(pool.rejectRate * 100).toFixed(2)}%
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Chip
                  label={pool.status}
                  color={getStatusColor(pool.status)}
                  variant="filled"
                />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onViewDetails(pool.id)}
                >
                  Подробнее
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MiningPoolsTable; 