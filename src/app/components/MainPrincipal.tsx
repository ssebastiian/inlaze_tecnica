'use client'

import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, CssBaseline, AppBar, Toolbar, IconButton, Button, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, alpha, useTheme, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Modal, Card, CardActions, CardContent, Grid2, TextField, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, ArrowBackOutlined, ArrowCircleLeftOutlined, ConfirmationNumberOutlined, MailOutlineOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

const drawerWidth = 200;

const navItems = [
  { text: 'Popular', href: '/' },
  { text: 'Favoritos', href: '/Favoritos' },
];

interface Props {
  window?: () => Window;
}

export const MainPrincipal: FC<Props> = ({ window }) => {

  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [showPassword, setShowPassword] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClickAccount = () => {
    setOpenCard(true);
  };

  const handleCloseCard = () => {
    setOpenCard(false);
  };


  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.6), boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" ml={10} mr={5}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={'/'} passHref>
              <Image
                src={'/image/Quickbet.png'}
                alt='image principal'
                width={200}
                height={60}
                objectFit="cover"
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'left', gap:5 }}>
            {navItems.map((item) => (
              <Link key={item.text} href={item.href} passHref>
                <Button sx={{ color: 'white' }}>
                  {item.text}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClickAccount} 
              >
                <AccountCircle />
              </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={window !== undefined ? () => window().document.body : undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: alpha(theme.palette.primary.main, 0.3) },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              width: drawerWidth,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'white',
              }}
            >
              <Image
                src={'/image/Quickbet.png'}
                alt='Logo'
                width={200}
                height={60}
              />
            </Box>
            <Divider sx={{ borderColor: alpha(theme.palette.primary.main, 0.9) }} />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link href={item.href} passHref>
                      <ListItemText primary={item.text} primaryTypographyProps={{ sx: { color: 'white' } }} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>

      {openCard && (
        <Box
          sx={{
            position: 'fixed',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '80%',
            zIndex: 'modal',
            borderRadius:2,
            background: 'linear-gradient(25deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.6))',
            backdropFilter: 'blur(10px)',
            padding: 1,
          }}
        >
          <Grid container spacing={0}>
            <Grid size={{ xs: 12, md: 8 }} >
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" p={5}>

              <Box display="flex" justifyContent="flex-start" alignItems="center" width="100%" mb={2}>
                <Button
                  startIcon={<ArrowCircleLeftOutlined />}
                  variant="text"
                  sx={{ color: 'white', textTransform: 'none', fontSize: '16px' }}
                  onClick={handleCloseCard}
                >
                  Back
                </Button>
              </Box>

              <Box display="flex" gap={2} mb={2} mt={5}>
                <Button
                  variant={selectedOption === 'Option 1' ? 'contained' : 'outlined'}
                  color={selectedOption === 'Option 1' ? 'secondary' : 'primary'}
                  onClick={() => handleSelectOption('Option 1')}
                >
                  Sign up
                </Button>
                <Button
                  variant={selectedOption === 'Option 2' ? 'contained' : 'outlined'}
                  color={selectedOption === 'Option 2' ? 'secondary' : 'primary'}
                  onClick={() => handleSelectOption('Option 2')}
                >
                  Log in
                </Button>
              </Box>

              {
                selectedOption === 'Option 1' ? (
                <Box display="flex" flexDirection="column" mt={25} gap={15}>
                  <Button
                  fullWidth
                  variant="contained"
                  endIcon={<MailOutlineOutlined />}
                  color='secondary'
                  sx={{
                    p:2
                  }}
                  >
                  Register with your Email
                  </Button>
                  <Typography variant="h2" color="white">For any questions, reach out to support@Quickbetdmovies.com</Typography>
                </Box>
                ):(<Box display="flex" flexDirection="column" mt={10} gap={5}>
                  <Typography variant='h2' textAlign="center" color="white">We love having you back</Typography>
                    <TextField
                      label="Email"
                      id="Email"
                      defaultValue=""
                      variant="filled"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                              <IconButton
                                  onClick={() => setShowPassword(showPassword ? false : true)}
                                  edge="end"
                              >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                          </InputAdornment>
                      ),
                      }}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& .MuiInputLabel-root': {
                          color: '#1C1C1C',
                        },
                        '& .MuiFilledInput-root': {
                          backgroundColor: 'white',
                          border: '1px solid #BDBDBD',
                          '&:hover': {
                            backgroundColor: '#F5F5F5',
                            borderColor: '#757575',
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            borderColor: '#1C1C1C',
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Password"
                      id="Password"
                      defaultValue=""
                      variant="filled"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        disableUnderline: true,
                        endAdornment: (
                          <InputAdornment position="end">
                              <IconButton
                                  onClick={() => setShowPassword(showPassword ? false : true)}
                                  edge="end"
                              >
                                  {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                          </InputAdornment>
                      ),
                      }}
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        '& .MuiInputLabel-root': {
                          color: '#1C1C1C',
                        },
                        '& .MuiFilledInput-root': {
                          backgroundColor: 'white',
                          border: '1px solid #BDBDBD',
                          '&:hover': {
                            backgroundColor: '#F5F5F5',
                            borderColor: '#757575',
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'white',
                            borderColor: '#1C1C1C',
                          },
                        },
                      }}
                    />
                    <Button
                    fullWidth
                    variant="contained"
                    endIcon={<ConfirmationNumberOutlined/>}
                    color='secondary'
                    sx={{
                      p:2
                    }}
                    >
                    Continue
                    </Button>
                    <Typography variant="h2" color="white">For any questions, reach out to support@Quickbetdmovies.com</Typography>
                </Box>)
              }
              
            </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} >
              <Box display={{ xs: 'none', md: 'flex' }} flexDirection="column" bgcolor="#1C1C1C" width={'546px'} height={'691px'} borderRadius={2} gap={5} pt={10} px={5}>
                <Typography variant='h1' textAlign="center" color="white" >{selectedOption === 'Option 1' ? 'Welcome to Quickbet Movies!' : 'Welcome back to Quickbet Movies!'}</Typography>
                <Typography variant='h2' textAlign="center" color="white">{selectedOption === 'Option 1' ?'🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!':'🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!'}</Typography>
                <Image
                  src={selectedOption === 'Option 1' ?'/image/login.png':'/image/register.png'}
                  alt='image principal'
                  width={500}
                  height={400}
                  objectFit="cover"
                  style={{
                    
                    bottom: 9,
                    left: '50%',
                    transform: 'translateX(60%)',
                    borderRadius: '0 0 10px 10px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

    </Box>
  );
};