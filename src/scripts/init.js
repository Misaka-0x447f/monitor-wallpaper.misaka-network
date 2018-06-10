import command from './command';

let mainScript = `Initializing subsys cpuset
Initializing subsys cpu
Initializing subsys cpuacct
misaka version 4 patch 2 bug control 5 build 41124 (gcc version 5.4.0 20130801)
command line: BOOT_IMAGE=/boot/vmII root=UUID=b4dd9c46-a379-490c-905a-6ea48ddb4047
 BIOS-e820: [mem 0x0000000000000000-0x000000000009fbff] usable
 BIOS-e820: [mem 0x000000000009fc00-0x000000000009ffff] reserved
 BIOS-e820: [mem 0x00000000000f0000-0x00000000000fffff] reserved
 BIOS-e820: [mem 0x0000000000100000-0x000000003e7dbfff] usable
 BIOS-e820: [mem 0x000000003e7dc000-0x000000003e7fffff] reserved
 BIOS-e820: [mem 0x00000000feffc000-0x00000000feffffff] reserved
 BIOS-e820: [mem 0x00000000fffc0000-0x00000000ffffffff] reserved
 NX (Execute Disable) protection: active
 SMBIOS 2.8 present.
 DMI: Red Hat KVM, BIOS 1.9.1-5.el7_3.2 04/01/2014
 Hypervisor detected: KVM
 e820: update [mem 0x00000000-0x00000fff] usable ==> reserved
 e820: remove [mem 0x000a0000-0x000fffff] usable
 e820: last_pfn = 0x3e7dc max_arch_pfn = 0x400000000
 MTRR default type: write-back
 MTRR fixed ranges enabled:
   00000-9FFFF write-back
   A0000-BFFFF uncachable
   C0000-FFFFF write-protect
 MTRR variable ranges enabled:
   0 base 0080000000 mask FF80000000 uncachable
   1 disabled
   2 disabled
   3 disabled
   4 disabled
   5 disabled
   6 disabled
   7 disabled
 x86/PAT: PAT not supported by CPU.
 x86/PAT: Configuration [0-7]: WB  WT  UC- UC  WB  WT  UC- UC
 found SMP MP-table at [mem 0x000f73d0-0x000f73df] mapped at [ffff8800000f73d0]
 Scanning 1 areas for low memory corruption
 99000 size 24576
 BRK [0x0220d000, 0x0220dfff] PGTABLE
 BRK [0x0220e000, 0x0220efff] PGTABLE
 BRK [0x0220f000, 0x0220ffff] PGTABLE
 BRK [0x02210000, 0x02210fff] PGTABLE
 RAMDISK: [mem 0x33790000-0x35bbffff]
 ACPI: Early table checksum verification disabled
 ACPI: RSDP 0x00000000000F71B0 000014 (v00 BOCHS )
 ACPI: RSDT 0x000000003E7E169C 000030 (v01 BOCHS  BXPCRSDT 00000001 BXPC 00000001)
 ACPI: FACP 0x000000003E7E0C14 000074 (v01 BOCHS  BXPCFACP 00000001 BXPC 00000001)
 ACPI: DSDT 0x000000003E7E0040 000BD4 (v01 BOCHS  BXPCDSDT 00000001 BXPC 00000001)
 ACPI: FACS 0x000000003E7E0000 000040
 ACPI: SSDT 0x000000003E7E0C88 00099C (v01 BOCHS  BXPCSSDT 00000001 BXPC 00000001)
 ACPI: APIC 0x000000003E7E1624 000078 (v01 BOCHS  BXPCAPIC 00000001 BXPC 00000001)
 ACPI: Local APIC address 0xfee00000
 No NUMA configuration found
 Faking a node at [mem 0x0000000000000000-0x000000003e7dbfff]
 NODE_DATA(0) allocated [mem 0x3e7d7000-0x3e7dbfff]
 kvm-clock: Using msrs 4b564d01 and 4b564d00
 kvm-clock: cpu 0, msr 0:3e7cf001, primary cpu clock
 kvm-clock: using sched offset of 644757193885693 cycles
 clocksource: kvm-clock: mask: 0xffffffffffffffff max_cycles: 0x1cd42e4dffb, max_idle_ns: 881590591483 ns
 Zone ranges:
   DMA      [mem 0x0000000000001000-0x0000000000ffffff]
   DMA32    [mem 0x0000000001000000-0x000000003e7dbfff]
   Normal   empty
   Device   empty
 Movable zone start for each node
 Early memory node ranges
   node   0: [mem 0x0000000000001000-0x000000000009efff]
   node   0: [mem 0x0000000000100000-0x000000003e7dbfff]
 Initmem setup node 0 [mem 0x0000000000001000-0x000000003e7dbfff]
 On node 0 totalpages: 255866
   DMA zone: 64 pages used for memmap
   DMA zone: 21 pages reserved
   DMA zone: 3998 pages, LIFO batch:0
   DMA32 zone: 3936 pages used for memmap
   DMA32 zone: 251868 pages, LIFO batch:31
 ACPI: PM-Timer IO Port: 0x608
 ACPI: Local APIC address 0xfee00000
 ACPI: LAPIC_NMI (acpi_id[0xff] dfl dfl lint[0x1])
 IOAPIC[0]: apic_id 0, version 17, address 0xfec00000, GSI 0-23
 ACPI: INT_SRC_OVR (bus 0 bus_irq 0 global_irq 2 dfl dfl)
 ACPI: INT_SRC_OVR (bus 0 bus_irq 5 global_irq 5 high level)
 ACPI: INT_SRC_OVR (bus 0 bus_irq 9 global_irq 9 high level)
 ACPI: INT_SRC_OVR (bus 0 bus_irq 10 global_irq 10 high level)
 ACPI: INT_SRC_OVR (bus 0 bus_irq 11 global_irq 11 high level)
 ACPI: IRQ0 used by override.
 ACPI: IRQ5 used by override.
 ACPI: IRQ9 used by override.
 ACPI: IRQ10 used by override.
 ACPI: IRQ11 used by override.
 Using ACPI (MADT) for SMP configuration information
 smpboot: Allowing 1 CPUs, 0 hotplug CPUs
 PM: Registered nosave memory: [mem 0x00000000-0x00000fff]
 PM: Registered nosave memory: [mem 0x0009f000-0x0009ffff]
 PM: Registered nosave memory: [mem 0x000a0000-0x000effff]
 PM: Registered nosave memory: [mem 0x000f0000-0x000fffff]
 e820: [mem 0x3e800000-0xfeffbfff] available for PCI devices
 Booting paravirtualized kernel on KVM
 clocksource: refined-jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645519600211568 ns
 setup_percpu: NR_CPUS:512 nr_cpumask_bits:512 nr_cpu_ids:1 nr_node_ids:1
 PERCPU: Embedded 34 pages/cpu @ffff88003e400000 s98328 r8192 d32744 u2097152
 pcpu-alloc: s98328 r8192 d32744 u2097152 alloc=1*2097152
 pcpu-alloc: [0] 0
 KVM setup async PF for cpu 0
 kvm-stealtime: cpu 0, msr 3e40d9c0
 PV qspinlock hash table entries: 256 (order: 0, 4096 bytes)
 Built 1 zonelists in Node order, mobility grouping on.  Total pages: 251845
 Policy zone: DMA32
 Kernel command line: BOOT_IMAGE=/boot/vmlinuz-4.4.0-97-generic root=UUID=b4dd9c46-a379-490c-905a-6ea48ddb4047 ro
 PID hash table entries: 4096 (order: 3, 32768 bytes)
 Calgary: detecting Calgary via BIOS EBDA area
 Calgary: Unable to locate Rio Grande table in EBDA - bailing!
 Memory: 950988K/1023464K available (8480K kernel code, 1294K rwdata, 3984K rodata, 1492K init, 1316K bss, 72476K reserved, 0K cma-reserved)
 SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
 Hierarchical RCU implementation.
  Build-time adjustment of leaf fanout to 64.
  RCU restricting CPUs from NR_CPUS=512 to nr_cpu_ids=1.
 RCU: Adjusting geometry for rcu_fanout_leaf=64, nr_cpu_ids=1
 NR_IRQS:33024 nr_irqs:256 16
 Console: colour dummy device 80x25
 console [tty0] enabled
 tsc: Detected 2266.746 MHz processor
 Calibrating delay loop (skipped) preset value.. 4533.49 BogoMIPS (lpj=9066984)
 pid_max: default: 32768 minimum: 301
 ACPI: Core revision 20150930
 ACPI: 2 ACPI AML tables successfully acquired and loaded
 Security Framework initialized
 Yama: becoming mindful.
 AppArmor: AppArmor initialized
 Dentry cache hash table entries: 131072 (order: 8, 1048576 bytes)
 Inode-cache hash table entries: 65536 (order: 7, 524288 bytes)
 Mount-cache hash table entries: 2048 (order: 2, 16384 bytes)
 Mountpoint-cache hash table entries: 2048 (order: 2, 16384 bytes)
 Initializing cgroup subsys io
 Initializing cgroup subsys memory
 Initializing cgroup subsys devices
 Initializing cgroup subsys freezer
 Initializing cgroup subsys net_cls
 Initializing cgroup subsys perf_event
 Initializing cgroup subsys net_prio
 Initializing cgroup subsys hugetlb
 Initializing cgroup subsys pids
 mce: CPU supports 10 MCE banks
 Last level iTLB entries: 4KB 0, 2MB 0, 4MB 0
 Last level dTLB entries: 4KB 0, 2MB 0, 4MB 0, 1GB 0
 Freeing SMP alternatives memory: 32K
 ftrace: allocating 32148 entries in 126 pages
 smpboot: APIC(0) Converting physical 0 to logical package 0
 smpboot: Max logical packages: 1
 x2apic enabled
 Switched APIC routing to physical x2apic.
 ..TIMER: vector=0x30 apic1=0 pin1=2 apic2=-1 pin2=-1
 smpboot: CPU0: Intel QEMU Virtual CPU version (cpu64-rhel6) (family: 0x6, model: 0xd, stepping: 0x3)
 Performance Events: Broken PMU hardware detected, using software events only.
 Failed to access perfctr msr (MSR c2 is 0)
 KVM setup paravirtual spinlock
 x86: Booted up 1 node, 1 CPUs
 smpboot: Total of 1 processors activated (4533.49 BogoMIPS)
 devtmpfs: initialized
 evm: security.selinux
 evm: security.SMACK64
 evm: security.SMACK64EXEC
 evm: security.SMACK64TRANSMUTE
 evm: security.SMACK64MMAP
 evm: security.ima
 evm: security.capability
 clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns
 futex hash table entries: 256 (order: 2, 16384 bytes)
 pinctrl core: initialized pinctrl subsystem
 RTC time: 12:07:09, date: 10/14/17
 NET: Registered protocol family 16
 cpuidle: using governor ladder
 cpuidle: using governor menu
 PCCT header not found.
 ACPI: bus type PCI registered
 acpiphp: ACPI Hot Plug PCI Controller Driver version: 0.5
 PCI: Using configuration type 1 for base access
 ACPI: Added _OSI(Module Device)
 ACPI: Added _OSI(Processor Device)
 ACPI: Added _OSI(3.0 _SCP Extensions)
 ACPI: Added _OSI(Processor Aggregator Device)
 ACPI: Interpreter enabled
 ACPI: (supports S0 S5)
 ACPI: Using IOAPIC for interrupt routing
 PCI: Using host bridge windows from ACPI; if necessary, use "pci=nocrs" and report a bug
 ACPI: PCI Root Bridge [PCI0] (domain 0000 [bus 00-ff])
 acpi PNP0A03:00: _OSC: OS supports [ASPM ClockPM Segments MSI]
 acpi PNP0A03:00: _OSC failed (AE_NOT_FOUND); disabling ASPM
 acpi PNP0A03:00: fail to add MMCONFIG information, can't access extended PCI configuration space under this bridge.
 acpiphp: Slot [3] registered
 acpiphp: Slot [4] registered
 acpiphp: Slot [5] registered
 acpiphp: Slot [6] registered
 acpiphp: Slot [7] registered
 acpiphp: Slot [8] registered
 acpiphp: Slot [9] registered
 acpiphp: Slot [10] registered
 acpiphp: Slot [11] registered
 acpiphp: Slot [12] registered
 acpiphp: Slot [13] registered
 acpiphp: Slot [14] registered
 acpiphp: Slot [15] registered
 acpiphp: Slot [16] registered
 acpiphp: Slot [17] registered
 acpiphp: Slot [18] registered
 acpiphp: Slot [19] registered
 acpiphp: Slot [20] registered
 acpiphp: Slot [21] registered
 acpiphp: Slot [22] registered
 acpiphp: Slot [23] registered
 acpiphp: Slot [24] registered
 acpiphp: Slot [25] registered
 acpiphp: Slot [26] registered
 acpiphp: Slot [27] registered
 acpiphp: Slot [28] registered
 acpiphp: Slot [29] registered
 acpiphp: Slot [30] registered
 acpiphp: Slot [31] registered
 PCI host bridge to bus 0000:00
 pci_bus 0000:00: root bus resource [io  0x0000-0x0cf7 window]
 pci_bus 0000:00: root bus resource [io  0x0d00-0xffff window]
 pci_bus 0000:00: root bus resource [mem 0x000a0000-0x000bffff window]
 pci_bus 0000:00: root bus resource [mem 0x3e800000-0xfebfffff window]
 pci_bus 0000:00: root bus resource [bus 00-ff]
 pci 0: [8086:1237] type 00 class 0x060000
 pci 0: [8086:7000] type 00 class 0x060100
 pci 0: [8086:7010] type 00 class 0x010180
 pci 0: reg 0x20: [io  0xc0c0-0xc0cf]
 pci 0: legacy IDE quirk: reg 0x10: [io  0x01f0-0x01f7]
 pci 0: legacy IDE quirk: reg 0x14: [io  0x03f6]
 pci 0: legacy IDE quirk: reg 0x18: [io  0x0170-0x0177]
 pci 0: legacy IDE quirk: reg 0x1c: [io  0x0376]
 pci 0: [8086:7020] type 00 class 0x0c0300
 pci 0: reg 0x20: [io  0xc040-0xc05f]
 pci 0: [8086:7113] type 00 class 0x068000
 pci 0: quirk: [io  0x0600-0x063f] claimed by PIIX4 ACPI
 pci 0: quirk: [io  0x0700-0x070f] claimed by PIIX4 SMB
 pci 0: [1013:00b8] type 00 class 0x030000
 pci 0: reg 0x10: [mem 0xfc000000-0xfdffffff pref]
 pci 0: reg 0x14: [mem 0xfebd0000-0xfebd0fff]
 pci 0: reg 0x30: [mem 0xfebc0000-0xfebcffff pref]
 pci 0: [1af4:1000] type 00 class 0x020000
 pci 0: reg 0x10: [io  0xc060-0xc07f]
 pci 0: reg 0x14: [mem 0xfebd1000-0xfebd1fff]
 pci 0: reg 0x30: [mem 0xfeb40000-0xfeb7ffff pref]
 pci 0: [1af4:1000] type 00 class 0x020000
 pci 0: reg 0x10: [io  0xc080-0xc09f]
 pci 0: reg 0x14: [mem 0xfebd2000-0xfebd2fff]
 pci 0: reg 0x30: [mem 0xfeb80000-0xfebbffff pref]
 pci 0: [1af4:1001] type 00 class 0x010000
 pci 0: reg 0x10: [io  0xc000-0xc03f]
 pci 0: reg 0x14: [mem 0xfebd3000-0xfebd3fff]
 pci 0: [1af4:1002] type 00 class 0x00ff00
 pci 0: reg 0x10: [io  0xc0a0-0xc0bf]
 ACPI: PCI Interrupt Link [LNKA] (IRQs 5 *10 11)
 ACPI: PCI Interrupt Link [LNKB] (IRQs 5 *10 11)
 ACPI: PCI Interrupt Link [LNKC] (IRQs 5 10 *11)
 ACPI: PCI Interrupt Link [LNKD] (IRQs 5 10 *11)
 ACPI: PCI Interrupt Link [LNKS] (IRQs *9)
 ACPI: Enabled 16 GPEs in block 00 to 0F
 vgaarb: setting as boot device: PCI:0
 vgaarb: device added: PCI:0,decodes=io+mem,owns=io+mem,locks=none
 vgaarb: loaded
 vgaarb: bridge control possible 0
 SCSI subsystem initialized
 libata version 3.00 loaded.
 ACPI: bus type USB registered
 usbcore: registered new interface driver usbfs
 usbcore: registered new interface driver hub
 usbcore: registered new device driver usb
 PCI: Using ACPI for IRQ routing
 PCI: pci_cache_line_size set to 64 bytes
 e820: reserve RAM buffer [mem 0x0009fc00-0x0009ffff]
 e820: reserve RAM buffer [mem 0x3e7dc000-0x3fffffff]
 NetLabel: Initializing
 NetLabel:  domain hash size = 128
 NetLabel:  protocols = UNLABELED CIPSOv4
 NetLabel:  unlabeled traffic allowed by default
 amd_nb: Cannot enumerate AMD northbridges
 clocksource: Switched to clocksource kvm-clock
 AppArmor: AppArmor Filesystem Enabled
 pnp: PnP ACPI init
 pnp 00:00: Plug and Play ACPI device, IDs PNP0b00 (active)
 pnp 00:01: Plug and Play ACPI device, IDs PNP0303 (active)
 pnp 00:02: Plug and Play ACPI device, IDs PNP0f13 (active)
 pnp 00:03: [dma 2]
 pnp 00:03: Plug and Play ACPI device, IDs PNP0700 (active)
 pnp: PnP ACPI: found 4 devices
 clocksource: acpi_pm: mask: 0xffffff max_cycles: 0xffffff, max_idle_ns: 2085701024 ns
 pci_bus 0000:00: resource 4 [io  0x0000-0x0cf7 window]
 pci_bus 0000:00: resource 5 [io  0x0d00-0xffff window]
 pci_bus 0000:00: resource 6 [mem 0x000a0000-0x000bffff window]
 pci_bus 0000:00: resource 7 [mem 0x3e800000-0xfebfffff window]
 NET: Registered protocol family 2
 TCP established hash table entries: 8192 (order: 4, 65536 bytes)
 TCP bind hash table entries: 8192 (order: 5, 131072 bytes)
 TCP: Hash tables configured (established 8192 bind 8192)
 UDP hash table entries: 512 (order: 2, 16384 bytes)
 UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
 NET: Registered protocol family 1
 pci 0: Limiting direct PCI/PCI transfers
 pci 0: PIIX3: Enabling Passive Release
 pci 0: Activating ISA DMA hang workarounds
 ACPI: PCI Interrupt Link [LNKD] enabled at IRQ 11
 pci 0: Video device with shadowed ROM
 PCI: CLS 0 bytes, default 64
 Unpacking initramfs...
 Freeing initrd memory: 37056K
 Scanning for low memory corruption every 60 seconds
 audit: initializing netlink subsys (disabled)
 audit: type=2000 audit(1507982832.213:1): initialized
 Initialise system trusted keyring
 HugeTLB registered 2 MB page size, pre-allocated 0 pages
 zbud: loaded
 VFS: Disk quotas dquot_6.6.0
 VFS: Dquot-cache hash table entries: 512 (order 0, 4096 bytes)
 squashfs: version 4.0 (2009/01/31) Phillip Lougher
 fuse init (API version 7.23)
 Key type big_key registered
 Allocating IMA MOK and blacklist keyrings.
 Key type asymmetric registered
 Asymmetric key parser 'x509' registered
 Block layer SCSI generic (bsg) driver version 0.4 loaded (major 249)
 io scheduler noop registered
 io scheduler deadline registered (default)
 io scheduler cfq registered
 pci_hotplug: PCI Hot Plug PCI Core version: 0.5
 pciehp: PCI Express Hot Plug Controller Driver version: 0.4
 efifb: probing for efifb
 efifb: framebuffer at 0xfc000000, mapped to 0xffffc90000200000, using 1408k, total 1408k
 efifb: mode is 800x600x24, linelength=2400, pages=1
 efifb: scrolling: redraw
 efifb: Truecolor: size=0:8:8:8, shift=0:16:8:0
 Console: switching to colour frame buffer device 100x37
 fb0: EFI VGA frame buffer device
 intel_idle: does not run on family 6 model 13
 input: Power Button as /devices/LNXSYSTM:00/LNXPWRBN:00/input/input0
 ACPI: Power Button [PWRF]
 GHES: HEST is not enabled!
 ACPI: PCI Interrupt Link [LNKC] enabled at IRQ 10
 virtio-pci 0: virtio_pci: leaving for legacy driver
 virtio-pci 0: virtio_pci: leaving for legacy driver
 ACPI: PCI Interrupt Link [LNKA] enabled at IRQ 10
 virtio-pci 0: virtio_pci: leaving for legacy driver
 ACPI: PCI Interrupt Link [LNKB] enabled at IRQ 11
 virtio-pci 0: virtio_pci: leaving for legacy driver
 Serial: 8250/16550 driver, 32 ports, IRQ sharing enabled
 Linux agpgart interface v0.103
 loop: module loaded
  vda: vda1
 ata_piix 0: version 2.13
 scsi host0: ata_piix
 scsi host1: ata_piix
 ata1: PATA max MWDMA2 cmd 0x1f0 ctl 0x3f6 bmdma 0xc0c0 irq 14
 ata2: PATA max MWDMA2 cmd 0x170 ctl 0x376 bmdma 0xc0c8 irq 15
 libphy: Fixed MDIO Bus: probed
 tun: Universal TUN/TAP device driver, 1.6
 tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
 PPP generic driver version 2.4.2
 ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
 ehci-pci: EHCI PCI platform driver
 ehci-platform: EHCI generic platform driver
 ohci_hcd: USB 1.1 'Open' Host Controller (OHCI) Driver
 ohci-pci: OHCI PCI platform driver
 ohci-platform: OHCI generic platform driver
 uhci_hcd: USB Universal Host Controller Interface driver
 uhci_hcd 0: UHCI Host Controller
 uhci_hcd 0: new USB bus registered, assigned bus number 1
 uhci_hcd 0: detected 2 ports
 uhci_hcd 0: irq 11, io base 0x0000c040
 usb usb1: New USB device found, idVendor=1d6b, idProduct=0001
 usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
 usb usb1: Product: UHCI Host Controller
 usb usb1: Manufacturer: Linux 4.4.0-97-generic uhci_hcd
 usb usb1: SerialNumber: 0
 hub 1-0:1.0: USB hub found
 hub 1-0:1.0: 2 ports detected
 i8042: PNP: PS/2 Controller [PNP0303:KBD,PNP0f13:MOU] at 0x60,0x64 irq 1,12
 serio: i8042 KBD port at 0x60,0x64 irq 1
 serio: i8042 AUX port at 0x60,0x64 irq 12
 mousedev: PS/2 mouse device common for all mice
 input: AT Translated Set 2 keyboard as /devices/platform/i8042/serio0/input/input1
 rtc_cmos 00:00: RTC can wake from S4
 rtc_cmos 00:00: rtc core: registered rtc_cmos as rtc0
 rtc_cmos 00:00: alarms up to one day, 114 bytes nvram
 i2c /dev entries driver
 device-mapper: uevent: version 1.0.3
 device-mapper: ioctl: 4.34.0-ioctl (2015-10-28) initialised: dm-devel@redhat.com
 ledtrig-cpu: registered to indicate activity on CPUs
 NET: Registered protocol family 10
 NET: Registered protocol family 17
 Key type dns_resolver registered
 microcode: CPU0 sig=0x6d3, pf=0x1, revision=0x1
 microcode: Microcode Update Driver: v2.01 <tigran@aivazian.fsnet.co.uk>, Peter Oruba
 registered taskstats version 1
 Loading compiled-in X.509 certificates
 Loaded X.509 cert 'Build time autogenerated kernel key: d1010f9627fd9242df4b03365d2931dfd1ad3d42'
 zswap: loaded using pool lzo/zbud
 Key type trusted registered
 Key type encrypted registered
 AppArmor: AppArmor sha1 policy hashing enabled
 ima: No TPM chip found, activating TPM-bypass!
 evm: HMAC attrs: 0x1
   Magic number: 5:413:127
 acpi device:02: hash matches
 rtc_cmos 00:00: setting system clock to 2017-10-14 12:07:11 UTC (1507982831)
 BIOS EDD facility v0.16 2004-Jun-25, 0 devices found
 EDD information not available.
 PM: Hibernation image not present or could not be loaded.
 ata2.01: NODEV after polling detection
 ata2.00: ATAPI: QEMU DVD-ROM, 2.3.0, max UDMA/100
 ata2.00: configured for MWDMA2
 scsi 1:0:0:0: CD-ROM            QEMU     QEMU DVD-ROM     2.3. PQ: 0 ANSI: 5
 sr 1:0:0:0: [sr0] scsi3-mmc drive: 4x/4x cd/rw xa/form2 tray
 cdrom: Uniform CD-ROM driver Revision: 3.20
 sr 1:0:0:0: Attached scsi CD-ROM sr0
 sr 1:0:0:0: Attached scsi generic sg0 type 5
 Freeing unused kernel memory: 1492K
 Write protecting the kernel read-only data: 14336k
 Freeing unused kernel memory: 1748K
 Freeing unused kernel memory: 112K
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: udevadm: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: udevadm: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: systemd-udevd: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 random: udevadm: uninitialized urandom read (16 bytes read, 2 bits of entropy available)
 usb 1-1: new full-speed USB device number 2 using uhci_hcd
 virtio_net virtio0 ens3: renamed from eth0
 virtio_net virtio1 ens4: renamed from eth1
 input: VirtualPS/2 VMware VMMouse as /devices/platform/i8042/serio1/input/input4
 input: VirtualPS/2 VMware VMMouse as /devices/platform/i8042/serio1/input/input3
 FDC 0 is a S82078B
 [drm] Initialized drm 1.1.0 20060810
 checking generic (fc000000 160000) vs hw (fc000000 2000000)
 fb: switching to cirrusdrmfb from EFI VGA
 Console: switching to colour dummy device 80x25
 [TTM] Zone  kernel: Available graphics memory: 495714 kiB
 [TTM] Initializing pool allocator
 [TTM] Initializing DMA pool allocator
 [drm] fb mappable at 0xFC000000
 [drm] vram aper at 0xFC000000
 [drm] size 33554432
 [drm] fb depth is 24
 [drm]    pitch is 3072
 fbcon: cirrusdrmfb (fb0) is primary device
 with a huge-page mapping due to MTRR override.
 Console: switching to colour frame buffer device 128x48
 cirrus 0: fb0: cirrusdrmfb frame buffer device
 [drm] Initialized cirrus 1.0.0 20110418 for 0 on minor 0
 usb 1-1: New USB device found, idVendor=0627, idProduct=0001
 usb 1-1: New USB device strings: Mfr=1, Product=3, SerialNumber=5
 usb 1-1: Product: QEMU USB Tablet
 usb 1-1: Manufacturer: QEMU
 usb 1-1: SerialNumber: 42
 hidraw: raw HID events driver (C) Jiri Kosina
 usbcore: registered new interface driver usbhid
 usbhid: USB HID core driver
 input: QEMU QEMU USB Tablet as /devices/pci0000:00/0/usb1/1-1/1-1:1.0/0003:0627:0001.0001/input/input5
 hid-generic 0003:0627:0001.0001: input,hidraw0: USB HID v0.01 Pointer [QEMU QEMU USB Tablet] on usb-0-1/input0
 tsc: Refined TSC clocksource calibration: 2266.745 MHz
 clocksource: tsc: mask: 0xffffffffffffffff max_cycles: 0x20ac7e63e76, max_idle_ns: 440795234679 ns
 md: linear personality registered for level -1
 md: multipath personality registered for level -4
 md: raid0 personality registered for level 0
 md: raid1 personality registered for level 1
 raid6: sse2x1   gen()  3822 MB/s
 raid6: sse2x1   xor()  3010 MB/s
 raid6: sse2x2   gen()  5556 MB/s
 raid6: sse2x2   xor()  5055 MB/s
 raid6: sse2x4   gen()  4255 MB/s
 raid6: sse2x4   xor()  3728 MB/s
 raid6: using algorithm sse2x2 gen() 5556 MB/s
 raid6: .... xor() 5055 MB/s, rmw enabled
 raid6: using intx1 recovery algorithm
 xor: measuring software checksum speed
    prefetch64-sse:  8808.000 MB/sec
    generic_sse:  7523.000 MB/sec
 xor: using function: prefetch64-sse (8808.000 MB/sec)
 async_tx: api initialized (async)
 md: raid6 personality registered for level 6
 md: raid5 personality registered for level 5
 md: raid4 personality registered for level 4
 md: raid10 personality registered for level 10
 Btrfs loaded
 EXT4-fs (vda1): mounted filesystem with ordered data mode. Opts: (null)
 systemd[1]: systemd 229 running in system mode. (+PAM +AUDIT +SELINUX +IMA +APPARMOR +SMACK +SYSVINIT +UTMP +LIBCRYPTSETUP +GCRYPT +GNUTLS +ACL +XZ -LZ4 +SECCOMP +BLKID +ELFUTILS +KMOD -IDN)
 systemd[1]: Detected virtualization kvm.
 systemd[1]: Detected architecture x86-64.
 systemd[1]: Set hostname to <misaka>.
 systemd[1]: Listening on /dev/initctl Compatibility Named Pipe.
 systemd[1]: Set up automount Arbitrary Executable File Formats File System Automount Point.
 systemd[1]: Reached target Encrypted Volumes.
 systemd[1]: Created slice User and Session Slice.
 systemd[1]: Reached target User and Group Name Lookups.
 systemd[1]: Listening on Syslog Socket.
 systemd[1]: Listening on udev Control Socket.
 systemd[1]: Created slice System Slice.
 systemd[1]: Reached target Slices.
 systemd[1]: Listening on Journal Audit Socket.
 systemd[1]: Listening on LVM2 metadata daemon socket.
 systemd[1]: Listening on udev Kernel Socket.
 systemd[1]: Listening on Journal Socket (/dev/log).
 systemd[1]: Reached target Swap.
 systemd[1]: Listening on Device-mapper event daemon FIFOs.
 systemd[1]: Listening on LVM2 poll daemon socket.
 systemd[1]: Listening on fsck to fsckd communication Socket.
 systemd[1]: Listening on Journal Socket.
 systemd[1]: Starting Journal Service...
 systemd[1]: Starting Nameserver information manager...
 systemd[1]: Mounting Debug File System...
 systemd[1]: Mounting Huge Pages File System...
 systemd[1]: Mounting POSIX Message Queue File System...
 systemd[1]: Starting Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling...
 systemd[1]: Starting Load Kernel Modules...
 systemd[1]: Starting Uncomplicated firewall...
 systemd[1]: Starting Set console keymap...
 systemd[1]: Starting Create list of required static device nodes for the current kernel...
 systemd[1]: Started Trigger resolvconf update for networkd DNS.
 systemd[1]: Started Forward Password Requests to Wall Directory Watch.
 systemd[1]: Mounted Debug File System.
 systemd[1]: Mounted Huge Pages File System.
 systemd[1]: Mounted POSIX Message Queue File System.
 systemd[1]: Started Nameserver information manager.
 systemd[1]: Started Create list of required static device nodes for the current kernel.
 systemd[1]: Starting Create Static Device Nodes in /dev...
 systemd[1]: Reached target Network (Pre).
 systemd[1]: Started LVM2 metadata daemon.
 systemd[1]: Started Uncomplicated firewall.
 Loading iSCSI transport class v2.0-870.
 systemd[1]: Started Journal Service.
 iscsi: registered transport (tcp)
 iscsi: registered transport (iser)
 EXT4-fs (vda1): re-mounted. Opts: errors=remount-ro
 systemd-journald[302]: Received request to flush runtime journal from PID 1
 piix4_smbus 0: SMBus Host Controller at 0x700, revision 0
 audit: type=1400 audit(1507982857.751:2): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lxc-container-default" pid=611 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.751:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lxc-container-default-cgns" pid=611 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.751:4): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lxc-container-default-with-mounting" pid=611 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.751:5): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lxc-container-default-with-nesting" pid=611 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.775:6): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/sbin/dhclient" pid=621 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.775:7): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-client.action" pid=621 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.775:8): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-helper" pid=621 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.775:9): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/connman/scripts/dhclient-script" pid=621 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.791:10): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/bin/lxc-start" pid=623 comm="apparmor_parser"
 audit: type=1400 audit(1507982857.807:11): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/bin/ubuntu-core-launcher" pid=625 comm="apparmor_parser"
 cgroup: new mount options do not match the existing superblock, will be ignored
 ppdev: user-space parallel port driver`;

export default [
    [mainScript, command.fastTerminal],
    [command.cls],
    ['env0: initializing...'],
    [command.delay, 3000],
    [command.eof]
];
