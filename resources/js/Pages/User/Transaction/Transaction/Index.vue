<template>
    <Head>
        <title>{{ $page.props.setting.app_name ?? 'Atur Setting Terlebih Dahulu' }} - Data Transaksi</title>
    </Head>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                <div class="breadcrumb-title pe-3">Transaksi</div>
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data Transaksi</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->

            <div class="card border-top border-0 border-3 border-primary">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <h6 class="mb-3">Riwayat Transaksi</h6>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table mb-0">
                            <thead class="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Kode Transaksi</th>
                                    <th>Kategori</th>
                                    <th>Judul</th>
                                    <th>Maksimal Pembayaran</th>
                                    <th>Pembayaran</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="!transactions.data.length">
                                    <td colspan="8" align="center">Belum ada transaksi</td>
                                </tr>
                                <tr v-for="(transaction, index) in transactions.data" :key="index">
                                    <td>{{ ++index + (transactions.current_page - 1) * transactions.per_page }}</td>
                                    <td>{{ transaction.code }}</td>
                                    <td>{{ transaction.exam.category.name }}</td>
                                    <td>{{ transaction.exam.title }}</td>
                                    <td>{{ transaction.maximum_payment_time }}</td>
                                    <td>{{ formatPrice(transaction.total_purchases) }}</td>
                                    <td>
                                        <span class="badge bg-warning" v-if="transaction.transaction_status == 'pending'">Menunggu Pembayaran</span>
                                        <span class="badge bg-primary" v-if="transaction.transaction_status == 'paid'">Pembayaran Diterima</span>
                                        <span class="badge bg-danger" v-if="transaction.transaction_status == 'failed'">Transakasi Gagal</span>
                                        <span class="badge bg-success" v-if="transaction.transaction_status == 'done'">Transaksi Selesai</span>
                                    </td>
                                    <td>
                                        <div class="d-flex order-actions">
                                            <Link :href="`/user/transactions/${transaction.id}`"><i class='bx bx-grid-alt'></i></Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination :links="transactions.links" align="end" />

                </div>
            </div>
        </div>
    </div>
    <!--end page wrapper -->
</template>

<script>
    //import layout user
    import LayoutUser from '../../../../Layouts/Layout.vue';

    //import component pagination
    import Pagination from '../../../../Components/Pagination.vue';

    // import Link
    import { Link } from '@inertiajs/inertia-vue3';

    // import Head from Inertia
    import {
        Head
    } from '@inertiajs/inertia-vue3';

    import { Inertia } from '@inertiajs/inertia';

    export default {
        // layout
        layout: LayoutUser,

        // register components
        components: {
            Link,
            Head,
            Pagination
        },

        // props
        props: {
            transactions: Object
        },
        methods: {
            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return 'Rp.' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        }
    }
</script>
