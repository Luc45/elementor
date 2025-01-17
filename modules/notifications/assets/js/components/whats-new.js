import { useEffect } from 'react';
import { Box, Drawer, ThemeProvider } from '@elementor/ui';
import { QueryClient, QueryClientProvider } from '@elementor/query';
import { WhatsNewTopBar } from './whats-new-top-bar';
import { WhatsNewDrawerContent } from './whats-new-drawer-content';

const queryClient = new QueryClient( {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 1000 * 60 * 30, // 30 minutes
		},
	},
} );

export const WhatsNew = ( props ) => {
	const { isOpen, setIsOpen, setIsRead, anchorPosition = 'right' } = props;

	useEffect( () => {
		if ( ! isOpen ) {
			return;
		}

		setIsRead( true );
	}, [ isOpen, setIsRead ] );

	return (
		<>
			<QueryClientProvider client={ queryClient }>
				<ThemeProvider colorScheme="auto">
					<Drawer
						anchor={ anchorPosition }
						open={ isOpen }
						onClose={ () => setIsOpen( false ) }
						ModalProps={ {
							style: {
								// Above the WordPress Admin Top Bar.
								zIndex: 999999,
							},
						} }
					>
						<Box
							sx={ {
								width: 320,
								backgroundColor: 'background.default',
							} }
							role="presentation"
						>
							<WhatsNewTopBar setIsOpen={ setIsOpen } />
							<Box
								sx={ {
									padding: '16px',
								} }
							>
								<WhatsNewDrawerContent />
							</Box>
						</Box>
					</Drawer>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
};

WhatsNew.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
	setIsRead: PropTypes.func.isRequired,
	anchorPosition: PropTypes.oneOf( [ 'left', 'top', 'right', 'bottom' ] ),
};
